import { motion } from 'framer-motion';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

interface LayoutType {
  title: string;
  cover_image: string;
  tags?: string[];
  key?: string;
}

const Layout: NextPage<LayoutType> = ({
  children,
  title,
  key,
  tags,
  cover_image,
}) => (
  <motion.article
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: 'easeInOut' }}
  >
    <>
      <NextSeo
        openGraph={{
          type: 'article',
          url: `https://www.unghee.dev/${title}`,
          title,
          images: [
            {
              url: cover_image,
              width: 800,
              height: 600,
              alt: 'thumbnail',
            },
          ],
          article: {
            tags,
          },
        }}
      />
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
