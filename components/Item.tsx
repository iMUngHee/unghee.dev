import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export interface ItemType {
  id: number;
  img: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  slug: string;
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

const Item: React.FC<ItemType> = ({
  id,
  img,
  title,
  description,
  tags,
  date,
  slug,
}) => {
  return (
    <Link passHref href={`/posts/${slug}`}>
      <motion.a
        key={id}
        className="m-4 flex
        w-full flex-col
        overflow-hidden
        rounded-md
        bg-slate-50 shadow-md shadow-slate-500 dark:bg-zinc-700
        dark:shadow-slate-900 
        md:[width:calc(50%-2rem)] lg:w-[20rem]
      "
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.5, type: "easeInOut" }}
      >
        <div className="relative h-[18rem] w-full overflow-hidden rounded-t-md">
          <Image
            src={img}
            alt="thumbnail"
            objectFit="cover"
            layout="fill"
            className="object-center"
          />
        </div>
        <div className="flex h-[10rem] flex-col justify-between p-2">
          <div className="flex w-full flex-col p-2">
            <h4
              className="w-full text-2xl font-bold text-zinc-900 dark:text-white
              md:text-xl
            "
            >
              {title}
            </h4>
            <div className=" mt-1 flex-1 text-sm text-gray-500 dark:text-gray-300">
              {description}
            </div>
          </div>
          <div className="flex items-center justify-between p-2">
            <span>
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="ml-1 text-sm text-cyan-600 dark:text-cyan-200"
                >
                  #{tag}
                </span>
              ))}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-300">
              {date}
            </span>
          </div>
        </div>
      </motion.a>
    </Link>
  );
};

export default Item;
