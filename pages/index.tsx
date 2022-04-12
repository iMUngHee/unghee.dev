import Footer from '@components/Footer';
import HeadLine from '@components/headLine';
import Layout from '@components/Layout/animate';
import Container from '@components/Layout/ariticle';
import Paragraph from '@components/paragraph';
import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Container>
        <div className="mt-5 flex w-full items-center justify-center">
          <div className="h-60 w-60 rounded-full bg-cyan-400" />
        </div>
        <div className="mt-5 px-3">
          <div>
            <h2 className="text-3xl font-bold">Lee Unghee</h2>
            <p className="mt-1">Developer ( Front-End / iOS ) </p>
            <div className="mt-5 flex w-full items-center justify-center">
              <div className="relative h-24 w-24 overflow-hidden rounded-full shadow-2xl md:h-36 md:w-36">
                <Image src="/image/profile.png" alt="profile" layout="fill" />
              </div>
            </div>
          </div>
          <div>
            <HeadLine>Work</HeadLine>
            <Paragraph>
              et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut
              ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae
              porro eius odio et labore et velit aut
            </Paragraph>
          </div>
          <div>
            <HeadLine>Bio</HeadLine>
            <Paragraph>
              et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut
              ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae
              porro eius odio et labore et velit aut
            </Paragraph>
          </div>
          <div>
            <HeadLine>Skills</HeadLine>
            <Paragraph>
              et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut
              ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae
              porro eius odio et labore et velit aut
            </Paragraph>
          </div>
          <div>
            <HeadLine>❤️</HeadLine>
            <Paragraph>
              et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut
              ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae
              porro eius odio et labore et velit aut
            </Paragraph>
          </div>
          <div>
            <HeadLine>On the Web</HeadLine>
            <Paragraph>
              et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut
              ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae
              porro eius odio et labore et velit aut
            </Paragraph>
            <Paragraph>
              et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut
              ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae
              porro eius odio et labore et velit aut
            </Paragraph>
          </div>
        </div>
        <Footer />
      </Container>
    </Layout>
  );
};

export default Home;
