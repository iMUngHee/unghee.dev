import Image from "next/image";

interface IItem {
  id: number;
  img: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
}

export default function Item({
  id,
  img,
  title,
  description,
  tags,
  date,
}: IItem) {
  return (
    <div
      key={id}
      className="h-[20rem] w-full rounded-md bg-slate-50 shadow-md
        shadow-slate-500 dark:bg-zinc-700 dark:shadow-slate-900 
      "
    >
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="relative h-[55%] w-full overflow-hidden rounded-t-md ">
          <Image
            src={img}
            alt="thumbnail"
            objectFit="cover"
            layout="fill"
            className="object-center"
          />
        </div>
        <div className="flex h-[45%] w-full flex-col justify-between px-3 pt-2">
          <div className="flex w-full flex-col">
            <div
              className="w-full text-2xl font-bold text-zinc-900 dark:text-white
              md:text-xl
            "
            >
              {title}
            </div>
            <div className=" mt-1 text-sm text-gray-500 dark:text-gray-300">
              {description}
            </div>
          </div>
          <div className="flex items-center justify-between pb-2">
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
      </div>
    </div>
  );
}
