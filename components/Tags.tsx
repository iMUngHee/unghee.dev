import { TagCloud } from "react-tagcloud";
import Layout from "./Layout/article";

const fakeTags = [
  {
    value: "React",
    count: 54,
  },
  {
    value: "JS",
    count: 30,
  },
  {
    value: "TS",
    count: 14,
  },
  {
    value: "Framework",
    count: 22,
  },
  {
    value: "Algorithm",
    count: 8,
  },
  {
    value: "ReactNative",
    count: 5,
  },
  {
    value: "Swift",
    count: 45,
  },
  {
    value: "CS",
    count: 30,
  },
  {
    value: "ML",
    count: 2,
  },
  {
    value: "NodeJS",
    count: 43,
  },
  {
    value: "React",
    count: 54,
  },
  {
    value: "JS",
    count: 30,
  },
  {
    value: "TS",
    count: 14,
  },
  {
    value: "Framework",
    count: 22,
  },
  {
    value: "Algorithm",
    count: 8,
  },
  {
    value: "ReactNative",
    count: 5,
  },
  {
    value: "Swift",
    count: 45,
  },
  {
    value: "CS",
    count: 30,
  },
  {
    value: "ML",
    count: 2,
  },
  {
    value: "NodeJS",
    count: 43,
  },
  {
    value: "React",
    count: 54,
  },
  {
    value: "JS",
    count: 30,
  },
  {
    value: "TS",
    count: 14,
  },
  {
    value: "Framework",
    count: 22,
  },
  {
    value: "Algorithm",
    count: 8,
  },
  {
    value: "ReactNative",
    count: 5,
  },
  {
    value: "Swift",
    count: 45,
  },
  {
    value: "CS",
    count: 30,
  },
  {
    value: "ML",
    count: 2,
  },
  {
    value: "NodeJS",
    count: 43,
  },
  {
    value: "React",
    count: 54,
  },
  {
    value: "JS",
    count: 30,
  },
  {
    value: "TS",
    count: 14,
  },
  {
    value: "Framework",
    count: 22,
  },
  {
    value: "Algorithm",
    count: 8,
  },
  {
    value: "ReactNative",
    count: 5,
  },
  {
    value: "Swift",
    count: 45,
  },
  {
    value: "CS",
    count: 30,
  },
  {
    value: "ML",
    count: 2,
  },
  {
    value: "NodeJS",
    count: 43,
  },
];

const customRenderer = (tag: any, size: number) => {
  console.log(size);
  return (
    <span
      key={tag.value}
      style={{
        fontSize: `${size / 2}em`,
        margin: "0 3px",
        padding: "0 3px",
        display: "inline-block",
        fontFamily: "RocknRoll One",
      }}
    >
      {tag.value}
    </span>
  );
};

export default function Tags() {
  return (
    <Layout title="Tags">
      <div className="flex h-full w-full items-center justify-center text-left">
        <TagCloud
          tags={fakeTags}
          maxSize={5}
          minSize={2}
          renderer={customRenderer}
        />
      </div>
    </Layout>
  );
}
