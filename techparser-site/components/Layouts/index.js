import Head from 'next/head';

import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-full">
      <Head>
        <title>Tech Parser</title>
        <link rel="icon" href="/icon.svg" />

        <link href="https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css" />
      </Head>

      <div className="flex-grow">{children}</div>

      <Footer />
    </div>
  );
};
export default Layout;
