import { useRouter } from 'next/router';
import { DocsDataType } from 'src/pages/posts';
import React, { useEffect, useState } from 'react';
import Item from './Item';
import Layout from './Layout/animate';

const Items: React.FC<DocsDataType> = ({ posts }) => {
  const router = useRouter();
  const [items, setItems] = useState(posts);

  useEffect(() => {
    if (!router.query.tag) return;
    const filteredByTag = posts?.filter((post) =>
      post.frontMatter.tags.includes(router.query.tag as string),
    );
    setItems(filteredByTag);
  }, [router, posts]);

  return (
    <Layout title="Posts">
      <div className="-m-4 flex flex-wrap">
        {items!.map((post, index) => (
          <Item
            key={index}
            id={post.frontMatter.id}
            slug={post.slug}
            img={post.frontMatter.cover_image}
            title={post.frontMatter.title}
            tags={post.frontMatter.tags}
            description={post.frontMatter.description}
            date={post.frontMatter.date}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Items;
