import Items from "@components/Items";
import Tags from "@components/Tags";
import cls from "@libs/cls";
import { NextPage } from "next";
import { useState } from "react";

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
          className={cls(
            "font-['RocknRoll_One']",
            type === "recent"
              ? "border-b-2 border-black dark:border-amber-50"
              : "",
          )}
        >
          Recent
        </button>
        <button
          value="tag"
          onClick={onSelect}
          className={cls(
            "font-['RocknRoll_One']",
            type === "recent"
              ? ""
              : "border-b-2 border-black dark:border-amber-50",
          )}
        >
          Tag
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
