import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Footer from '../components/footer';
import Header from '../components/header';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          In Contact
        </h1>
        <Link href={'/'}>
          <a>Go home</a>
        </Link>
      </main>
      <Footer />
    </div>
  )
}
