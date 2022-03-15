import NavigationBar from "@components/NavigationBar";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-amber-50 dark:bg-zinc-800">
      <NavigationBar />
    </div>
  );
};

export default Home;
