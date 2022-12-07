import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Profile.module.scss'
import Header from '@/components/Header/Header'
import Linkbox from '@/components/Linkbox/Linkbox'
import Works from '@/components/Profile_works/Works'

const Profile: React.FC = () => {
  return (
    <>
      <Head>
        <title>Profile | Mogy Portfolio</title>
        <meta name='description' content='MogyのPortfolioサイトのプロフィールページです。' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header></Header>
      <main className={styles.container}>
        <h1>Profile</h1>

        <p className={styles.comment}>プロフィール、略歴、関わったお仕事を記載しています。</p>

        <div className={styles.profileContainer}>
          <div className={styles.profileBox}>
            <div className={styles.profileBoxContains}>
              <div className={styles.profileBoxLeft}>
                <Image
                  src='https://source.unsplash.com/random'
                  alt={`のロゴ画像です。`}
                  width={400}
                  height={400}
                />
              </div>
              <div className={styles.profileBoxRight}>
                <div className={styles.boxRightHead}>
                  <h2>Name</h2>
                  <h2>Age</h2>
                  <h2>Hobby</h2>
                </div>
                <div className={styles.boxRightText}>
                  <p>Mogy</p>
                  <p>28</p>
                  <p>ゲーム</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.profileBox}>
            <div className={styles.profileBoxContains}>
              <div className={styles.profileBoxLeft}>
                <p>略歴</p>
              </div>
              <div className={styles.profileBoxRight}>
                <p>
                  1994/09/28 生誕。宮崎県都城市出身。
                  <br />
                  SaaS企業で自社システムのフロントエンジニアとして勤務。
                  <br />
                  利用スキルは、HTML、CSS、jQuery。
                  <br />
                  <br />
                  都城市立泉ヶ丘高校を留年、留年から1年後に中退。
                  <br />
                  その後、高等学校卒業程度認定試験を取得し、宮崎公立大学に入学。
                  <br />
                  <br />
                  新卒で団体職員の総務に就職。
                  <br />
                  1年8カ月勤めるも、将来のスキル不安を感じ退職を決意。
                  <br />
                  <br />
                  ハローワークでWEB系の職業訓練校のチラシを見て、職業訓練校に入学。
                  半年間、illustrator、Photoshop、コーディングの勉強を行う。
                  <br />
                  <br />
                  卒業後、現SaaS企業に入社。
                  <br />
                  自社システムを用いてWEBサイトを制作しています。（2022/11で2年経過）
                  <br />
                  <br />
                  個人的に色々勉強中。
                  <br />
                  触っているもの ⇒ SCSS、TestCafe、React、Next.js、microCMS...
                  <br />
                  学んでいきたいもの ⇒ React、Next.js、TypeScript、Tailwind.css
                </p>
              </div>
            </div>
          </div>

          <h2 className={styles.workHead}>Works</h2>
          <Works
            head='申込管理機能作成'
            detail='サイトデザインHTMLと自社システムと紐づけて、申込み管理機能を制作。'
          />
          <Works
            head='保険料算出APIとWebフォームの紐づけ'
            detail='保険料算出するAPIに、フォームの入力内容からデータを整形して、渡し、結果を受け取る。受け取った値を自社システムに登録させる。'
          />
          <Works
            head='職域接種の応募フォームを制作'
            detail='職域接種の応募フォームを5営業日で提出するプロダクトにエンジニアとして参画。リードが接種日程を選択し、応募できるシステムを開発。'
          />
          <Works
            head='自社新テンプレート商品のコーディングと機能追加'
            detail='自社の新しいプロダクトとして、デザインを一新したパッケージ商品にジョイン。デザインのコーディングと自社システムと繋げることにより、デザインをCMSから変更できるように調整。'
          />
        </div>
        {/* profileContainer */}
      </main>
      {/* container */}

      <div className={styles.linkContainer}>
        <h2>LINK</h2>
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
      </div>

      <Link className={styles.pageTop} href='#'>
        <span className={styles.pageTopArrow}></span>
      </Link>
    </>
  )
}

export default Profile
