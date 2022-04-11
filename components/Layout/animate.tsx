import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Head from 'next/head';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

interface LayoutType {
  title: string;
  key?: string;
}

const Layout: NextPage<LayoutType> = ({ children, title, key }) => (
  <motion.article
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: 'easeInOut' }}
  >
    <>
      {title && (
        <Head>
          <title>{title} - UNG</title>
        </Head>
      )}
      {children}
    </>
  </motion.article>
);

export default Layout;
