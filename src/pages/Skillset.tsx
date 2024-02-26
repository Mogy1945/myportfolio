import Head from 'next/head'
import React from 'react'
import styles from '../styles/Skillset.module.scss'
import Header from '@/components/Header/Header'
import Linkbox from '@/components/Linkbox/Linkbox'
import Skills from '@/components/Skillset_skills/Skills'
import Totop from '@/components/Totop/Totop'

const Skillset: React.FC = () => {
  return (
    <>
      <Head>
        <title>Skill-Set | Mogy Portfolio</title>
        <meta name='description' content='MogyのPortfolioサイトのスキルセット一覧ページです。' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className={styles.container}>
        <h1>Skill-Set List</h1>

        <p className={styles.comment}>スキルセット一覧です。</p>
        <div className={styles.skillContainerBase}>
          <div className={styles.skillBox}>
            <div className={styles.skillBoxContains}>
              <div className={styles.skillBoxLeft}>
                <p>スキルランク基準</p>
              </div>
              <div className={styles.skillBoxRight}>
                <p>★★★★★・・・実務の中で利用歴があり、100件以上の実績がある。</p>
                <p>★★★★☆・・・実務の中で利用歴があり、30件以上の実績がある。</p>
                <p>★★★☆☆・・・実務の中で利用歴がある。</p>
                <p>★★☆☆☆・・・勉強の中で利用歴があり、プロダクトとして公開している。</p>
                <p>★☆☆☆☆・・・勉強の中で利用歴がある。</p>
              </div>
            </div>
          </div>
          {/* skillContainerBase */}
        </div>
        <div className={styles.skillContainer}>
          <Skills head='HTML' srcurl='/img/Skillset/skillset_img_html.png' star='★★★★☆' />
          <Skills head='CSS3' srcurl='/img/Skillset/skillset_img_css.png' star='★★★★☆' />
          <Skills head='jQuery' srcurl='/img/Skillset/skillset_img_jquery.png' star='★★★★☆' />
          <Skills
            head='Playwright'
            srcurl='/img/Skillset/skillset_img_playwright.webp'
            star='★★★☆☆'
          />
          <Skills head='React' srcurl='/img/Skillset/skillset_img_react.png' star='★★★☆☆' />
          <Skills head='Next.js' srcurl='/img/Skillset/skillset_img_next.png' star='★★★☆☆' />
          <Skills
            head='TypeScript'
            srcurl='/img/Skillset/skillset_img_typescript.png'
            star='★★★☆☆'
          />
          <Skills head='SCSS' srcurl='/img/Skillset/skillset_img_scss.png' star='★★★☆☆' />
          <Skills head='tailwind.css' srcurl='/img/Skillset/skillset_img_firebase.png' star='★★★☆☆' />
          <Skills head='Firebase' srcurl='/img/Skillset/skillset_img_firebase.png' star='★★☆☆☆' />
          <Skills head='TestCafe' srcurl='/img/Skillset/skillset_img_testcafe.png' star='★☆☆☆☆' />
          <Skills head='Vue' srcurl='/img/Skillset/skillset_img_vue.png' star='★☆☆☆☆' />
          {/* skillContainer */}
        </div>
      </main>

      <div className={styles.linkContainer}>
        <h2>LINK</h2>
        <Linkbox
          href='/Profile'
          srcUrl='/img/Home/home_link_profile.png'
          name='PROFILE'
          detail='経歴とプロフィールを記載しています。'
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
      </div>

      <Totop />
    </>
  )
}

export default Skillset
