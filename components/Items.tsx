import { DocsDataType } from "pages/posts";
import React from "react";
import Item from "./Item";

const Items: React.FC<DocsDataType> = ({ posts }) => {
  return (
    <div className="-m-4 flex flex-wrap">
      {posts.map((post, index) => (
        <Item
          key={index}
          id={index}
          slug={post.slug}
          img={post.frontMatter.cover_image}
          title={post.frontMatter.title}
          tags={["tags"]}
          description={"post.description"}
          date={post.frontMatter.date}
        />
      ))}
    </div>
  );
};

export default Items;
