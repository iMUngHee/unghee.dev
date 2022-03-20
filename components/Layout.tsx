import { NextPage } from "next";
import NavigationBar from "./NavigationBar";

const Layout: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-amber-50 dark:bg-zinc-800">
      <NavigationBar />
    </div>
  );
};

export default Layout;
