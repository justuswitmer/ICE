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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Dhurjati&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.expectContainerRotate}>
          <div className={styles.expectContainer}>
            <h2>What can you expect from ICE?</h2>
            <div className={styles.expectDetailContain}>
              <div className={styles.expectDetail}>
                <h3>Reliability</h3>
                <p>We do what we say we are going to do to earn our customers trust. Every Time!</p>
              </div>
              <div className={styles.expectDetail}>
                <h3>Professional Service</h3>
                <p>It matters to us that you get the quality service that you deserve.</p>
              </div>
              <div className={styles.expectDetail}>
                <h3>Hassle-Free Quotes</h3>
                <p>Get a customized quote in minutes and schedule service immediately.</p>
              </div>
              <div className={styles.expectDetail}>
                <h3>Transparency</h3>
                <p>Surprises, in this business are not a good thing.</p>
              </div>
              <div className={styles.expectDetail}>
                <h3>Something</h3>
                <p>More somethings.</p>
              </div>
              <div className={styles.expectDetail}>
                <h3>Honest Pricing</h3>
                <p>Competitive rates with no hidden costs.</p>
              </div>
              <div className={styles.expectDetail}>
                <h3>Customer Experience Guarantee</h3>
                <p>We care about every aspect of our service. If you aren't happy, we will make it right!</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div >
  )
}
