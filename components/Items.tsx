import Image from "next/image";

const fakeData = [
  {
    id: 1,
    img: "https://media.vlpt.us/images/jun17114/post/f30c2a9d-8889-4c82-9e5e-7292d7078433/hooks.png",
    title: "Do you know React?",
    description: "That is awesome, you know? If you don't, just do it!",
    tags: ["React", "JS", "Framework"],
    date: "03. 21. 22",
  },
  {
    id: 2,
    img: "https://media.vlpt.us/images/jun17114/post/f30c2a9d-8889-4c82-9e5e-7292d7078433/hooks.png",
    title: "Do you know React?",
    description: "That is awesome, you know? If you don't, just do it!",
    tags: ["React", "JS", "Framework"],
    date: "03. 21. 22",
  },
  {
    id: 3,
    img: "https://media.vlpt.us/images/jun17114/post/f30c2a9d-8889-4c82-9e5e-7292d7078433/hooks.png",
    title: "Do you know React?",
    description: "That is awesome, you know? If you don't, just do it!",
    tags: ["React", "JS", "Framework"],
    date: "03. 21. 22",
  },
  {
    id: 4,
    img: "https://media.vlpt.us/images/jun17114/post/f30c2a9d-8889-4c82-9e5e-7292d7078433/hooks.png",
    title: "Do you know React?",
    description: "That is awesome, you know? If you don't, just do it!",
    tags: ["React", "JS", "Framework"],
    date: "03. 21. 22",
  },
  {
    id: 5,
    img: "https://media.vlpt.us/images/jun17114/post/f30c2a9d-8889-4c82-9e5e-7292d7078433/hooks.png",
    title: "Do you know React?",
    description: "That is awesome, you know? If you don't, just do it!",
    tags: ["React", "JS", "Framework"],
    date: "03. 21. 22",
  },
  {
    id: 6,
    img: "https://media.vlpt.us/images/jun17114/post/f30c2a9d-8889-4c82-9e5e-7292d7078433/hooks.png",
    title: "Do you know React?",
    description: "That is awesome, you know? If you don't, just do it!",
    tags: ["React", "JS", "Framework"],
    date: "03. 21. 22",
  },
  {
    id: 7,
    img: "https://media.vlpt.us/images/jun17114/post/f30c2a9d-8889-4c82-9e5e-7292d7078433/hooks.png",
    title: "Do you know React?",
    description: "That is awesome, you know? If you don't, just do it!",
    tags: ["React", "JS", "Framework"],
    date: "03. 21. 22",
  },
  {
    id: 8,
    img: "https://media.vlpt.us/images/jun17114/post/f30c2a9d-8889-4c82-9e5e-7292d7078433/hooks.png",
    title: "Do you know React?",
    description: "That is awesome, you know? If you don't, just do it!",
    tags: ["React", "JS", "Framework"],
    date: "03. 21. 22",
  },
  {
    id: 9,
    img: "https://media.vlpt.us/images/jun17114/post/f30c2a9d-8889-4c82-9e5e-7292d7078433/hooks.png",
    title: "Do you know React?",
    description: "That is awesome, you know? If you don't, just do it!",
    tags: ["React", "JS", "Framework"],
    date: "03. 21. 22",
  },
  {
    id: 10,
    img: "https://media.vlpt.us/images/jun17114/post/f30c2a9d-8889-4c82-9e5e-7292d7078433/hooks.png",
    title: "Do you know React?",
    description: "That is awesome, you know? If you don't, just do it!",
    tags: ["React", "JS", "Framework"],
    date: "03. 21. 22",
  },
  {
    id: 11,
    img: "https://media.vlpt.us/images/jun17114/post/f30c2a9d-8889-4c82-9e5e-7292d7078433/hooks.png",
    title: "Do you know React?",
    description: "That is awesome, you know? If you don't, just do it!",
    tags: ["React", "JS", "Framework"],
    date: "03. 21. 22",
  },
  {
    id: 12,
    img: "https://media.vlpt.us/images/jun17114/post/f30c2a9d-8889-4c82-9e5e-7292d7078433/hooks.png",
    title: "Do you know React?",
    description: "That is awesome, you know? If you don't, just do it!",
    tags: ["React", "JS", "Framework"],
    date: "03. 21. 22",
  },
  {
    id: 13,
    img: "https://media.vlpt.us/images/jun17114/post/f30c2a9d-8889-4c82-9e5e-7292d7078433/hooks.png",
    title: "Do you know React?",
    description: "That is awesome, you know? If you don't, just do it!",
    tags: ["React", "JS", "Framework"],
    date: "03. 21. 22",
  },
  {
    id: 14,
    img: "https://media.vlpt.us/images/jun17114/post/f30c2a9d-8889-4c82-9e5e-7292d7078433/hooks.png",
    title: "Do you know React?",
    description: "That is awesome, you know? If you don't, just do it!",
    tags: ["React", "JS", "Framework"],
    date: "03. 21. 22",
  },
];

export default function Items() {
  return (
    <div
      className="mt-6 flex flex-col items-center justify-center gap-y-7
        md:grid md:grid-cols-2 md:gap-6 xl:grid-cols-4
      "
    >
      {fakeData.map((post) => (
        <div
          key={post.id}
          className="h-[28rem] w-full rounded-md bg-slate-50 shadow-md shadow-slate-500
              dark:bg-zinc-700 dark:shadow-slate-900 xl:h-[22rem]
            "
        >
          <div className="flex h-full w-full flex-col items-center justify-center">
            <div className="relative h-[55%] w-full overflow-hidden rounded-t-md ">
              <Image
                src={post.img}
                alt="thumbnail"
                objectFit="cover"
                layout="fill"
                className="object-center"
              />
            </div>
            <div className="flex h-[45%] w-full flex-col justify-between px-3 pt-2">
              <div className="flex w-full flex-1 flex-grow-0">
                <div className="text-2xl font-bold text-zinc-900 dark:text-white">
                  {post.title}
                </div>
                <div className="mt-1 text-gray-500 dark:text-gray-300">
                  {post.description}
                </div>
              </div>
              <div className="flex items-center justify-between pb-2">
                <span>
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="ml-1 text-sm text-cyan-600 dark:text-cyan-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  {post.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
