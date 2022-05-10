import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Items from '@components/Items';
import Tags from '@components/Tags';
import { GetStaticProps, NextPage } from 'next';
import { useState } from 'react';
import { motion } from 'framer-motion';

export interface PostType {
  slug: string;
  frontMatter: {
    id: number;
    title: string;
    date: string;
    tags: string[];
    cover_image: string;
    description: string;
  };
}

export interface TagType {
  value: string;
  count: number;
}

export interface DocsDataType {
  posts?: PostType[];
  tagInfo?: TagType[];
}

type TPosts = 'recent' | 'tag';

const Posts: NextPage<DocsDataType> = ({ posts, tagInfo }) => {
  const [type, setType] = useState<TPosts>('recent');
  const onSelect = ({ target: { value } }: any) => {
    value === 'recent' ? setType('recent') : setType('tag');
  };
  return (
    <div className="mt-5 w-full pb-12">
      <div className="flex w-full flex-row items-center justify-start gap-5">
        <button
          onClick={onSelect}
          value="recent"
          className="font-['RocknRoll_One']"
        >
          Recent
          {type === 'recent' ? (
            <motion.div
              layoutId="underline"
              className="border-b-2 border-black pt-1"
            />
          ) : null}
        </button>
        <button
          value="tag"
          onClick={onSelect}
          className="font-['RocknRoll_One']"
        >
          Tag
          {type === 'tag' ? (
            <motion.div
              layoutId="underline"
              className="border-b-2 border-black pt-1"
            />
          ) : null}
        </button>
      </div>
      <div className="mt-4 flex">
        <div className="box-border flex-1">
          {type === 'recent' ? (
            <Items posts={posts} />
          ) : (
            <Tags tagInfo={tagInfo} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join('docs'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(
      path.join('docs', filename),
      'utf-8',
    );

    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      slug,
      frontMatter,
    };
  });
  const ordered = posts.sort((a, b) => b.frontMatter.id - a.frontMatter.id);

  const tagInfo: TagType[] = [];

  ordered
    .map((post) => post.frontMatter.tags)
    .flat(2)
    .forEach((tag) => {
      if (tagInfo.filter((e) => e.value === tag).length > 0) {
        tagInfo.forEach((e) => e.value === tag && e.count++);
      } else {
        tagInfo.push({ value: `${tag}`, count: 0 });
      }
    });

  return {
    props: {
      posts: ordered,
      tagInfo,
    },
  };
};
