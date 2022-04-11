import Footer from '@components/Footer';
import Layout from '@components/Layout/animate';
import Container from '@components/Layout/ariticle';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Container>
        <div>Profile</div>
        <div>Describe</div>
        <div>Bio</div>
        <div>Hobby</div>
      </Container>
      <Footer />
    </Layout>
  );
};

export default Home;
