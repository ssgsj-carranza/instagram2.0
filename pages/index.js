import Head from 'next/head'
import Header from '../components/Header';
import Feed from '../components/Feed';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Instagram-2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header />

      {/* feed */}
      <Feed />

      {/* modal */}
    </div>
  );
}



// npm install @heroicons/react
// npm install @tailwindcss/forms