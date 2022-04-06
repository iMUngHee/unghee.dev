import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Detail: NextPage = ({
  frontMatter: { title, date, cover_image },
  slug,
  content,
}: any) => {
  const router = useRouter();
  const body = marked(content);
  return (
    <>
      <div>
        <h1>{title}</h1>
        <div>Posted on {date}</div>
        <div>
          <div
            className="prose prose-2xl dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          >
            {/* {body} */}
            {/* {"<h2> abc </h2>"} */}
            {/* {{content | safe}} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("docs"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return { paths, fallback: false };
}
export async function getStaticProps({ params: { slug } }: any) {
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
}
