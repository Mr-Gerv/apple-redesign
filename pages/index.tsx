import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Landing from '../components/Landing';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Apple | Home</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        <Landing />
      </main>
    </div>
  );
};

export default Home;
