import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import hljs from 'highlight.js';
import { motion } from 'framer-motion';
import { marked } from 'marked';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { PostType } from '.';
import { ParsedUrlQuery } from 'querystring';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Layout from '@components/Layout/animate';
import Footer from '@components/Footer';
import Container from '@components/Layout/article';
import Link from 'next/link';

interface SlugType extends PostType {
  content: string;
  adjacentPosts: PostType[];
  hasAdjacent: number;
}

enum Adjacent {
  ONLY_NEXT = 0,
  ONLY_PREV = 1,
  HAS_TWO = 2,
}

const arrowVariants = {
  init: {
    x: 0,
  },
  hover: (direction: string) => ({
    x: direction === 'left' ? -10 : 10,
    transition: {
      duration: 0.5,
    },
  }),
};

const Detail: NextPage<SlugType> = ({
  frontMatter: { title, date, cover_image, tags },
  slug,
  content,
  adjacentPosts,
  hasAdjacent,
}) => {
  const [markedContent, setMarkedContent] = useState<string>();
  useEffect(() => {
    marked.setOptions({
      langPrefix: 'hljs language-',
      highlight: function (code) {
        return hljs.highlightAuto(code, [
          'cpp',
          'javascript',
          'html',
          'css',
          'swift',
          'mysql',
          'bash',
        ]).value;
      },
    });
    setMarkedContent(marked(content));
  }, [content]);
  return (
    <Layout title={title}>
      <Container>
        <div className="mt-14">
          <div className="px-8">
            <h1 className="text-3xl font-bold lg:text-4xl">{title}</h1>
            <div className="flex items-center justify-end pt-2">{date}</div>
            <div className="flex items-center justify-end pt-2">
              {tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="ml-2 rounded-xl bg-zinc-800 px-2 py-[0.125rem] text-xs text-amber-50
                  peer-valid:mt-1  dark:bg-amber-50 dark:text-zinc-900 lg:text-sm"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="my-7 px-8">
            <div className="overflow-hidden rounded-md">
              <Image
                src={cover_image}
                alt="thumbnail"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
            <div className="pt-5">
              <div
                className="prose prose-lg prose-zinc prose-img:rounded-md dark:prose-invert 
                  md:prose-xl
                "
                dangerouslySetInnerHTML={{ __html: markedContent! }}
              />
            </div>
          </div>
        </div>
        <div className="my-2 flex w-full flex-col items-center justify-between gap-4 px-1 py-2 md:flex-row">
          {hasAdjacent !== Adjacent.ONLY_NEXT && (
            <motion.button
              className="text-md flex h-14 w-full items-center justify-start rounded-md
            bg-zinc-700 px-3 text-left font-bold text-amber-50 shadow-md dark:bg-amber-50
            dark:text-zinc-800 md:w-1/2"
              initial="init"
              whileHover="hover"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                variants={arrowVariants}
                custom={'left'}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                />
              </motion.svg>
              <Link passHref href={`/posts/${adjacentPosts[0].slug}`}>
                <a className="ml-3 flex flex-col">
                  <span className="text-sm">Prev</span>
                  <span>{adjacentPosts[0].slug}</span>
                </a>
              </Link>
            </motion.button>
          )}
          {hasAdjacent !== Adjacent.ONLY_PREV && (
            <motion.button
              className="text-md flex h-14 w-full flex-row-reverse items-center justify-start
            rounded-md bg-zinc-700 px-3 text-right font-bold text-amber-50 shadow-md dark:bg-amber-50
            dark:text-zinc-800 md:w-1/2"
              initial="init"
              whileHover="hover"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                variants={arrowVariants}
                custom={'right'}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </motion.svg>
              <Link
                passHref
                href={`/posts/${
                  hasAdjacent === Adjacent.ONLY_NEXT
                    ? adjacentPosts[0].slug
                    : adjacentPosts[1].slug
                }`}
              >
                <a className="mr-3 flex flex-col">
                  <span className="text-sm">Next</span>
                  <span>
                    {hasAdjacent === Adjacent.ONLY_NEXT
                      ? adjacentPosts[0].slug
                      : adjacentPosts[1].slug}
                  </span>
                </a>
              </Link>
            </motion.button>
          )}
        </div>
        <Footer />
      </Container>
    </Layout>
  );
};

export default Detail;

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('docs'));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));
  return { paths, fallback: false };
};

interface ParamsType extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as ParamsType;

  const markdownWithMeta = fs.readFileSync(
    path.join('docs', slug + '.md'),
    'utf-8',
  );

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

  const { data: frontMatter, content } = matter(markdownWithMeta);

  const adjacentPosts = posts
    .filter((post) => Math.abs(post.frontMatter.id - frontMatter.id) === 1)
    .sort((a, b) => a.frontMatter.id - b.frontMatter.id);

  console.log(adjacentPosts);

  const hasAdjacent =
    adjacentPosts.length === Adjacent.HAS_TWO
      ? Adjacent.HAS_TWO
      : adjacentPosts[0].frontMatter.id > frontMatter.id
      ? Adjacent.ONLY_NEXT
      : Adjacent.ONLY_PREV;

  return {
    props: {
      frontMatter,
      slug,
      content,
      adjacentPosts,
      hasAdjacent,
    },
  };
};
