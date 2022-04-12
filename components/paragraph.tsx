import { NextPage } from 'next';

const Paragraph: NextPage = ({ children }) => {
  return <p className="mt-2 indent-4">{children}</p>;
};

export default Paragraph;
