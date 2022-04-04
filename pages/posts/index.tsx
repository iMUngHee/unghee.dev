import Items from "@components/Items";
import Tags from "@components/Tags";
import cls from "@libs/cls";
import { NextPage } from "next";
import { useState } from "react";
import { motion } from "framer-motion";

type TPosts = "recent" | "tag";

const Posts: NextPage = () => {
  const [type, setType] = useState<TPosts>("recent");
  const onSelect = ({ target: { value } }: any) => {
    value === "recent" ? setType("recent") : setType("tag");
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
          {type === "recent" ? (
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
          {type === "tag" ? (
            <motion.div
              layoutId="underline"
              className="border-b-2 border-black pt-1"
            />
          ) : null}
        </button>
      </div>
      <div className="mt-4 flex">
        <div className="box-border flex-1">
          {type === "recent" ? <Items /> : <Tags />}
        </div>
      </div>
    </div>
  );
};

export default Posts;
