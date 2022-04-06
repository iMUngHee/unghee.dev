import Item from "./Item";

interface IItem {
  id: number;
  img: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
}

export default function Items({ posts }: any) {
  return (
    <div className="-m-4 flex flex-wrap">
      {posts.map((post, index) => (
        <Item
          key={index}
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
}
