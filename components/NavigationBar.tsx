import cls from "@libs/cls";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function NavigationBar() {
  const { theme, setTheme } = useTheme();
  const [isHidden, setIsHidden] = useState(true);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    setIsHidden(true);
  }, [router]);
  if (!mounted) return null;
  const onHidden = () => {
    setIsHidden((prev) => !prev);
  };
  const onClick = () => {
    router.push("/");
  };

  return (
    <div
      className="
        fixed left-1/2 z-[9999] flex h-12 w-full -translate-x-1/2
        items-center justify-center
        bg-gradient-to-b from-amber-100 to-amber-50 dark:from-zinc-900
      dark:to-zinc-800
    "
    >
      <div
        className="flex h-full items-center justify-between
        [width:calc(100%-2em)] lg:mx-auto
        lg:w-[1024px] xl:w-[1376px] 2xl:w-[1728px]
      "
      >
        <div className="flex flex-row items-center justify-center gap-1">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 xl:h-7 xl:w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-zinc-800 dark:text-amber-50"
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </span>
          <span
            className="cursor-pointer select-none font-['RocknRoll_One'] text-xl text-zinc-800 dark:text-amber-50
          xl:text-2xl"
            onClick={onClick}
          >
            Unghee Lee
          </span>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 xl:gap-10">
          <div className={"hidden md:flex"}>
            <nav
              className="flex select-none flex-row items-center justify-center 
              gap-4 font-['RocknRoll_One'] text-base text-zinc-800
              dark:text-amber-50 xl:text-lg
              "
            >
              <Link href="/about">
                <a>About</a>
              </Link>
              <Link href="/works">
                <a>Works</a>
              </Link>
              <Link href="/posts">
                <a>Posts</a>
              </Link>
              <Link href="/movies">
                <a>Movies</a>
              </Link>
            </nav>
          </div>
          <span
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md
              bg-zinc-800 text-amber-50 shadow-md 
              dark:bg-amber-200 dark:text-zinc-800 dark:shadow-sm dark:shadow-slate-500
              "
          >
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </span>
          <span
            onClick={onHidden}
            className="dark:shadow-s flex h-8 w-8 cursor-pointer items-center justify-center rounded-md 
              bg-amber-50 text-zinc-800 shadow-md dark:bg-zinc-800 
                dark:text-amber-50 dark:shadow-sm dark:shadow-slate-500
                md:hidden
              "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>
        </div>
        <div
          className={cls(
            `absolute top-12 right-1 w-20 rounded-md bg-zinc-800 dark:bg-amber-50`,
            isHidden ? "hidden" : "",
          )}
        >
          <nav className="flex select-none flex-col items-center justify-center py-1 text-amber-50 dark:text-zinc-800">
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/works">
              <a>Works</a>
            </Link>
            <Link href="/posts">
              <a>Posts</a>
            </Link>
            <Link href="/movies">
              <a>Movies</a>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
