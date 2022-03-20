import { NextPage } from "next";
import NavigationBar from "./NavigationBar";

const Layout: NextPage = ({ children }) => {
  return (
    <div className="mx-auto h-screen w-screen bg-amber-50 text-zinc-800 dark:bg-zinc-800 dark:text-amber-50">
      <NavigationBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
