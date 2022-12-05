import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Header from '@/components/Header/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>TOP | Mogy Portfolio</title>
        <meta name='description' content='MogyのPortfolioサイトのトップページです。' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header></Header>
      <main className={styles.container}>
        <h1>Mogy Portfolio</h1>

        <p className={styles.comment}>ひとこと：ポートフォリオ、はじめました。</p>

        <div className={styles.linkContainer}>
          <div className={styles.linkBox}>
            <Link href=''>
              <div className={styles.linkBoxContains}>
                <div className={styles.linkBoxLeft}>
                  <Image
                    src='/img/Home/home_link_profile.png'
                    alt='プロフィールページへのリンクです。'
                    width={72}
                    height={72}
                  />
                </div>
                <div className={styles.linkBoxRight}>
                  <h2>PROFILE</h2>
                  <p>経歴とプロフィールを記載しています。</p>
                </div>
              </div>
            </Link>
          </div>
          <div className={styles.linkBox}>
            <Link href=''>
              <div className={styles.linkBoxContains}>
                <div className={styles.linkBoxLeft}>
                  <Image
                    src='/img/Home/home_link_skill.png'
                    alt='スキルセット一覧ページへのリンクです。'
                    width={72}
                    height={72}
                  />
                </div>
                <div className={styles.linkBoxRight}>
                  <h2>SKILL-SET</h2>
                  <p>経歴とプロフィールを記載しています。</p>
                </div>
              </div>
            </Link>
          </div>
          <div className={styles.linkBox}>
            <Link href=''>
              <div className={styles.linkBoxContains}>
                <div className={styles.linkBoxLeft}>
                  <Image
                    src='/img/Home/home_link_product.png'
                    alt='プロダクト一覧ページへのリンクです。'
                    width={72}
                    height={72}
                  />
                </div>
                <div className={styles.linkBoxRight}>
                  <h2>Product</h2>
                  <p>経歴とプロフィールを記載しています。</p>
                </div>
              </div>
            </Link>
          </div>
          <div className={styles.linkBox}>
            <Link href=''>
              <div className={styles.linkBoxContains}>
                <div className={styles.linkBoxLeft}>
                  <Image
                    src='/img/Home/home_link_contact.png'
                    alt='お問い合わせページへのリンクです。'
                    width={72}
                    height={72}
                  />
                </div>
                <div className={styles.linkBoxRight}>
                  <h2>Contact</h2>
                  <p>経歴とプロフィールを記載しています。</p>
                </div>
              </div>
            </Link>
          </div>

          {/* linkContainer */}
        </div>
        {/* container */}
      </main>
    </>
  )
}
