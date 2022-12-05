import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul className={styles.listContainer}>
            <li>
              <Link href='/'>
                <Image
                  height={30}
                  width={30}
                  alt='ポートフォリオのトップページへのリンクです。'
                  src='/img/Header/header_link_home.png'
                />
              </Link>
            </li>
            <li>
              <Link href='https://twitter.com/xunmogy2022' target='_blank'>
                <Image
                  height={30}
                  width={30}
                  alt='Twitterへのリンクです。'
                  src='/img/Header/header_link_twitter.png'
                />
              </Link>
            </li>
            <li>
              <Link href='https://github.com/Mogy1945' target='_blank'>
                <Image
                  height={30}
                  width={30}
                  alt='Githubへのリンクです。'
                  src='/img/Header/header_link_github.png'
                />
              </Link>
            </li>
            <li>
              <Link href='https://mogyblog-zeta.vercel.app/' target='_blank'>
                <Image
                  height={30}
                  width={30}
                  alt='Blogへのリンクです。'
                  src='/img/Header/header_link_blog.png'
                />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
