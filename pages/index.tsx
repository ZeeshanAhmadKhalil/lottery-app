import { Container } from '@mui/system';
import Head from 'next/head';
import HomeLayout from '~layouts/home-layout/HomeLayout';
import Home from '~screens/home';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | Lottery</title>
      </Head>
      <Container>
        <HomeLayout>
          <Home />
        </HomeLayout>
      </Container>
    </>
  );
}
