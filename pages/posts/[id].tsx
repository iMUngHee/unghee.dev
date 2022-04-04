import { NextPage } from "next";
import { useRouter } from "next/router";

const Detail: NextPage = () => {
  const router = useRouter();

  return <div>{router.asPath}</div>;
};

export default Detail;
