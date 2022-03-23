import Item from "./Item";

interface IItem {
  id: number;
  img: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
}

const fakeData: IItem[] = [
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
  {
    id: 15,
    img: "https://media.vlpt.us/images/jun17114/post/f30c2a9d-8889-4c82-9e5e-7292d7078433/hooks.png",
    title: "Do you know React?",
    description: "That is awesome, you know? If you don't, just do it!",
    tags: ["React", "JS", "Framework"],
    date: "03. 21. 22",
  },
  {
    id: 16,
    img: "https://media.vlpt.us/images/jun17114/post/f30c2a9d-8889-4c82-9e5e-7292d7078433/hooks.png",
    title: "Do you know React?",
    description: "That is awesome, you know? If you don't, just do it!",
    tags: ["React", "JS", "Framework"],
    date: "03. 21. 22",
  },
  {
    id: 17,
    img: "https://media.vlpt.us/images/jun17114/post/f30c2a9d-8889-4c82-9e5e-7292d7078433/hooks.png",
    title: "Do you know React?",
    description: "That is awesome, you know? If you don't, just do it!",
    tags: ["React", "JS", "Framework"],
    date: "03. 21. 22",
  },
  {
    id: 18,
    img: "https://media.vlpt.us/images/jun17114/post/f30c2a9d-8889-4c82-9e5e-7292d7078433/hooks.png",
    title: "Do you know React?",
    description: "That is awesome, you know? If you don't, just do it!",
    tags: ["React", "JS", "Framework"],
    date: "03. 21. 22",
  },
  {
    id: 19,
    img: "https://media.vlpt.us/images/jun17114/post/f30c2a9d-8889-4c82-9e5e-7292d7078433/hooks.png",
    title: "Do you know React?",
    description: "That is awesome, you know? If you don't, just do it!",
    tags: ["React", "JS", "Framework"],
    date: "03. 21. 22",
  },
  {
    id: 20,
    img: "https://media.vlpt.us/images/jun17114/post/f30c2a9d-8889-4c82-9e5e-7292d7078433/hooks.png",
    title: "Do you know React?",
    description: "That is awesome, you know? If you don't, just do it!",
    tags: ["React", "JS", "Framework"],
    date: "03. 21. 22",
  },
  {
    id: 21,
    img: "https://media.vlpt.us/images/jun17114/post/f30c2a9d-8889-4c82-9e5e-7292d7078433/hooks.png",
    title: "Do you know React?",
    description: "That is awesome, you know? If you don't, just do it!",
    tags: ["React", "JS", "Framework"],
    date: "03. 21. 22",
  },
];

export default function Items() {
  return (
    <div className="-m-4 flex flex-wrap">
      {fakeData.map((post) => (
        <Item
          key={post.id}
          id={post.id}
          img={post.img}
          title={post.title}
          tags={post.tags}
          description={post.description}
          date={post.date}
        />
      ))}
    </div>
  );
}
