import Items from "@components/Items";
import { NextPage } from "next";

const Posts: NextPage = () => {
  return (
    <div className="mx-auto mt-5 flex w-11/12 flex-col items-center justify-center pb-12">
      <div className="flex w-full flex-row items-center justify-start gap-5">
        <span className="border-b-2 border-black font-['RocknRoll_One']">
          Recent
        </span>
        <span className="font-['RocknRoll_One']">Tag</span>
      </div>
      <Items />
    </div>
  );
};

export default Posts;
