import { NextPage } from 'next';

const HeadLine: NextPage = ({ children }) => {
  return (
    <h2 className="mt-5 w-fit border-b-4 border-slate-300 text-2xl font-bold dark:border-slate-600">
      {children}
    </h2>
  );
};

export default HeadLine;
