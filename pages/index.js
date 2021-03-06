import Head from 'next/head'
import Header from '../components/Header';
import Feed from '../components/Feed';
import Modal from '../components/Modal';

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram-2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header />

      {/* feed */}
      <Feed />

      {/* modal */}
      <Modal />
    </div>
  );
}


// npm install @heroicons/react
// npm install @tailwindcss/forms
// npm install faker
// npm install --save-dev tailwind-scrollbar
// npm install tailwind-scrollbar-hide
// npm install next-auth@beta
// npm install recoil (state management library)
// npm install @headlessui/react
// npm install firebase
// npm install --save  react-moment (uninstalled for now)
// npm install --save moment (uninstalled for now)
// npm install react-time-ago javascript-time-ago --save (uninstalled)
// npm install react-timeago (trying this instead)