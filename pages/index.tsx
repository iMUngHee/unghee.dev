import Footer from '@components/Footer';
import Layout from '@components/Layout/animate';
import Container from '@components/Layout/ariticle';
import type { NextPage } from 'next';

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
              <div className="h-24 w-24 rounded-full bg-cyan-400" />
            </div>
          </div>
          <div>
            <h2 className="mt-5 w-16 border-b-4 border-slate-300 text-2xl font-bold dark:border-slate-600">
              Work
            </h2>
            <p className="mt-2 indent-4">
              et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut
              ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae
              porro eius odio et labore et velit aut
            </p>
          </div>
          <div>
            <h2 className="mt-5 w-9 border-b-4 border-slate-300 text-2xl font-bold dark:border-slate-600">
              Bio
            </h2>
            <p className="mt-2 indent-4">
              et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut
              ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae
              porro eius odio et labore et velit aut
            </p>
          </div>
          <div>
            <h2 className="mt-5 w-16 border-b-4 border-slate-300 text-2xl font-bold dark:border-slate-600">
              Skills
            </h2>
            <p className="mt-2 indent-4">
              et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut
              ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae
              porro eius odio et labore et velit aut
            </p>
          </div>
          <div>
            <h2 className="mt-5 w-7 border-b-4 border-slate-300 text-2xl font-bold dark:border-slate-600">
              ❤️
            </h2>
            <p className="mt-2 indent-4">
              et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut
              ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae
              porro eius odio et labore et velit aut
            </p>
          </div>
          <div>
            <h2 className="mt-5 border-b-4 border-slate-300 text-2xl font-bold dark:border-slate-600">
              On the Web
            </h2>
            <p className="mt-2 indent-4">
              et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut
              ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae
              porro eius odio et labore et velit aut
            </p>
            <p className="mt-2 indent-4">
              et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut
              ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae
              porro eius odio et labore et velit aut
            </p>
          </div>
        </div>
        <Footer />
      </Container>
    </Layout>
  );
};

export default Home;
