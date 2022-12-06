import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Product.module.scss'
import Header from '@/components/Header/Header'
import Products from '@/components/Product_products/Products'

const Profile: React.FC = () => {
  return (
    <>
      <Head>
        <title>Product | Mogy Portfolio</title>
        <meta name='description' content='MogyのPortfolioサイトのプロダクト一覧ページです。' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header></Header>
      <main className={styles.container}>
        <h1>Product</h1>

        <p className={styles.comment}>個人開発のプロダクト一覧ページです。</p>

        <div className={styles.productContainer}>
          <Products
            linkUrl='https://mogyblog-zeta.vercel.app/'
            srcUrl='/img/Product/product_link_blog.png'
            name='Mogy-Blog'
            date='2022/11'
            detail='私のブログです。本格的に個人開発を実践しようと思い作成した初めてのプロダクトです。microCMSと繋げることで、投稿と同時に内容が反映されるようになっています。また、SSGを利用することで、スムーズなUXに仕上げています。'
            skill='Next.js、SSR、SSG、SCSS、microCMS、Formspree、Vercel'
          />
          <Products
            linkUrl='https://myportfolio-five-virid.vercel.app/'
            srcUrl='/img/Product/product_link_portfolio.png'
            name='Mogy-Portfolio'
            date='2022/12'
            detail='私のポートフォリオです。ブログに引き続き2番目のプロダクトです。TypeScriptを勉強し、プロダクトとして利用したかったため、TSで作成しました。お仕事を依頼したい方の目線で動線やデザインを作成しています。'
            skill='TypeScript、Next.js、SCSS、Formspree、Vercel'
          />
        </div>
        {/* productContainer */}
      </main>
      {/* container */}
      <Link className={styles.pageTop} href='#'>
        <span className={styles.pageTopArrow}></span>
      </Link>
    </>
  )
}

export default Profile
