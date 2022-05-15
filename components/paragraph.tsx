import cls from '@libs/cls';
import { NextPage } from 'next';

interface ParagraphType {
  style?: string;
}

const Paragraph: NextPage<ParagraphType> = ({ children, style }) => {
  return <p className={cls('mt-2 indent-4', style || '')}>{children}</p>;
};

export default Paragraph;
