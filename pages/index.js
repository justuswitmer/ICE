import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Footer from '../components/footer';
import Header from '../components/header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ICE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Justus! Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
      <Footer />
    </div >
  )
}
