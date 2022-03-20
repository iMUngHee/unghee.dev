import { NextPage } from "next";
import NavigationBar from "./NavigationBar";

const Layout: NextPage = ({ children }) => {
  return (
    <div className="min-h-screen w-screen bg-amber-50 text-zinc-800 dark:bg-zinc-800 dark:text-amber-50">
      <NavigationBar />
      <main className="flex items-center justify-center pt-12">{children}</main>
    </div>
  );
};

export default Layout;
