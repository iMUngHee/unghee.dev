import { DocsDataType } from 'pages/posts';
import React from 'react';
import Item from './Item';
import Layout from './Layout/animate';

const Items: React.FC<DocsDataType> = ({ posts }) => {
  return (
    <Layout title="Posts">
      <div className="-m-4 flex flex-wrap">
        {posts.map((post, index) => (
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
