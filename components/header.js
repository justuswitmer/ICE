import Link from 'next/link'
import style from './header.module.css';
import ICE from '../public/images/ICE.svg';

export default function Header() {
  return (
    <div className={style.container}>
      <div>
        <div className={style.logo}>
          <ICE width={100} height={100} />
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
