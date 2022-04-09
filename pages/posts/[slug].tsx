import fs from "fs";
import path from "path";
import matter from "gray-matter";
import hljs from "highlight.js";
import { marked } from "marked";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PostType } from ".";
import { ParsedUrlQuery } from "querystring";
import Image from "next/image";
import { useEffect, useState } from "react";
import Layout from "@components/Layout/article";

interface SlugType extends PostType {
  content: string;
}

const Detail: NextPage<SlugType> = ({
  frontMatter: { title, date, cover_image, tags },
  slug,
  content,
}) => {
  const [markedContent, setMarkedContent] = useState<string>();
  useEffect(() => {
    marked.setOptions({
      langPrefix: "hljs language-",
      highlight: function (code) {
        return hljs.highlightAuto(code, [
          "cpp",
          "javascript",
          "html",
          "css",
          "swift",
        ]).value;
      },
    });
    setMarkedContent(marked(content));
  }, [content]);
  return (
    <Layout title={title}>
      <div className="flex w-full justify-center">
        <div className="flex w-full flex-col md:w-[768px]">
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
          <div className="my-2 flex items-center justify-between border-y-2 border-zinc-100 px-1 py-2">
            <button
              className="text-md rounded-md bg-zinc-700 py-1 px-3 text-center text-amber-50
          shadow-md dark:bg-amber-50 dark:text-zinc-800"
            >
              {"<-"} What is a React Hooks?
            </button>
            <button
              className="text-md rounded-md bg-zinc-700 py-1 px-3 text-center text-amber-50
          shadow-md dark:bg-amber-50 dark:text-zinc-800"
            >
              Do you know React is a bull shit? {"->"}
            </button>
          </div>
          <footer className="mb-5 flex items-center justify-center p-2 text-sm text-slate-400">
            © 2022 Unghee Lee. All Rights Reserved.
          </footer>
        </div>
      </div>
    </Layout>
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
