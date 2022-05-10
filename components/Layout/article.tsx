import { NextPage } from 'next';

const Container: NextPage = ({ children }) => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full flex-col md:w-[768px]">{children}</div>
    </div>
  );
};

export default Container;
