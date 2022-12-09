import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Product.module.scss'
import Header from '@/components/Header/Header'
import Linkbox from '@/components/Linkbox/Linkbox'
import Products from '@/components/Product_products/Products'
import { client } from '@/libs/client'
import type { Product } from '@/types/product'

export const getStaticProps = async () => {
  const product = await client.get({ endpoint: 'products_detail' })

  return {
    props: {
      products: product.contents,
    },
  }
}

type Props = {
  products: Product[]
}

const Profile: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ products }: Props) => {
  console.log(products)
  return (
    <>
      <Head>
        <title>Product | Mogy Portfolio</title>
        <meta name='description' content='MogyのPortfolioサイトのプロダクト一覧ページです。' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className={styles.container}>
        <h1>Product</h1>

        <p className={styles.comment}>個人開発のプロダクト一覧ページです。</p>

        <div className={styles.productContainer}>
          {products.map((product) => (
            <Products
              key={product.id}
              linkUrl={`/product/${product.id}`}
              srcUrl={product.sumbnail}
              name={product.name}
              date={product.date}
              detail={product.explanation}
              skill={product.skill}
            />
          ))}
        </div>
        {/* productContainer */}
      </main>
      {/* container */}

      <div className={styles.linkContainer}>
        <h2>LINK</h2>
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
