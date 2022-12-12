import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from '@/components/Header/Header'
import Linkbox from '@/components/Linkbox/Linkbox'

export default function Home() {
  return (
    <>
      <Head>
        <title>TOP | Mogy Portfolio</title>
        <meta name='description' content='MogyのPortfolioサイトのトップページです。' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className={styles.container}>
        <h1>Mogy Portfolio</h1>

        <p className={styles.comment}>ひとこと：ポートフォリオ、はじめました。</p>

        <div className={styles.linkContainer}>
          <Linkbox
            href='/Profile'
            srcUrl='/img/Home/home_link_profile.png'
            name='PROFILE'
            detail='経歴とプロフィールを記載しています。'
          />
          <Linkbox
            href='/Skillset'
            srcUrl='/img/Home/home_link_skill.png'
            name='SKILL-SET'
            detail='基準を元にスキルセットを掲載しています。'
          />
          <Linkbox
            href='/Product'
            srcUrl='/img/Home/home_link_product.png'
            name='PRODUCT'
            detail='個人開発を行ったプロダクトを掲載してます。'
          />
          <Linkbox
            href='/Contact'
            srcUrl='/img/Home/home_link_contact.png'
            name='CONTACT'
            detail='お問い合わせはこちらか、ヘッダーのSNSからお願いいたします。'
          />
          {/* linkContainer */}
        </div>
        {/* container */}
      </main>
    </>
  )
}
