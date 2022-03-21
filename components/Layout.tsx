import { NextPage } from "next";
import NavigationBar from "./NavigationBar";

const Layout: NextPage = ({ children }) => {
  return (
    <div
      className="sm:min-w-screen-sm md:min-w-screen-md lg:min-w-screen-lg xl:min-w-screen-xl  min-h-screen
      bg-amber-50 text-zinc-800 dark:bg-zinc-800 dark:text-amber-50"
    >
      <NavigationBar />
      <main className="flex w-full select-none items-center justify-center pt-12 xl:pt-16">
        {children}
      </main>
    </div>
  );
};

export default Layout;
