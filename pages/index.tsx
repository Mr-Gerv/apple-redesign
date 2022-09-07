import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Apple | Home</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1>Lets build the apple website</h1>
    </div>
  );
};

export default Home;
