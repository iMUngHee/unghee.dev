import { NextPage } from 'next';
import cls from '@libs/cls';

interface ParagraphType {
  style?: string;
}

const Paragraph: NextPage<ParagraphType> = ({ children, style }) => {
  return <div className={cls('mt-2 indent-4', style || '')}>{children}</div>;
};

export default Paragraph;
