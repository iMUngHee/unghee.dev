import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PostType } from ".";
import { ParsedUrlQuery } from "querystring";

interface SlugType extends PostType {
  content: string;
}

const Detail: NextPage<SlugType> = ({
  frontMatter: { title, date, cover_image },
  slug,
  content,
}) => {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <div>Posted on {date}</div>
        <div>
          <div
            className="prose prose-2xl dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          />
        </div>
      </div>
    </>
  );
};

export default Detail;

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join("docs"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
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
    path.join("docs", slug + ".md"),
    "utf-8",
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontMatter,
      slug,
      content,
    },
  };
};
