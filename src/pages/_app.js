import '@/styles/globals.css'
import Head from 'next/head'
import Navbar from 'components/Navbar';
function App({ Component, pageProps }) {
  return (
    <>
    <Navbar></Navbar>
    <Head>
    <link rel="icon" href="/CH_logo.png" />
    </Head>
      <Component {...pageProps} />
    </>
  );


}
export default App;

