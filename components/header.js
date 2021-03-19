import Link from 'next/link'
import style from './header.module.css';

export default function Header() {
  return (
    <div className={style.container}>
      <div>
        <div>
          ICE
        </div>
        <div className={style.logoDescription}>
          Iserman Contracting and Excavating
        </div>
      </div>
      <div className={style.serviceLink}>
        <Link href={'/services'}>
          <a>Services</a>
        </Link>
      </div>
      <div className={style.contactLink}>
        <Link href={'/contact'}>
          <a>Contact</a>
        </Link>
      </div>
      <button className={style.quoteBtn}>
        <Link className={style.quoteText} href={'/quote'}>
          <a>Get a Quote</a>
        </Link>
      </button>
    </div >
  )
}
