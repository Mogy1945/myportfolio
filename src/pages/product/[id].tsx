import { GetStaticPaths, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/ProductDetail.module.scss'
import Header from '@/components/Header/Header'
import Linkbox from '@/components/Linkbox/Linkbox'
import { client } from '@/libs/client'

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: 'products_detail' })

  const paths = data.contents.map((content: { id: string }) => `/product/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (context: { params: { id: string } }) => {
  const { id } = context.params
  const data = await client.get({ endpoint: 'products_detail', contentId: id })
  return {
    props: {
      product: data,
    },
  }
}

type ProductPageProps = InferGetStaticPropsType<typeof getStaticProps>

const ProductDetail: NextPage<ProductPageProps> = (props: ProductPageProps) => {
  const productObj = props.product
  console.log(props.product)
  return (
    <>
      <Head>
        <title>Product - {productObj.name} | Mogy Portfolio</title>
        <meta
          name='description'
          content={`MogyのPortfolioサイトのプロダクトである「${productObj.name}」のページです。`}
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      <main className={styles.container}>
        <h1>Product &lt;{productObj.name}&gt;</h1>

        <p className={styles.comment}>「{productObj.name}」について</p>

        <div className={styles.productDetailContainer}>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: `${productObj.despliction}`,
              }}
            />
          </div>
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

export default ProductDetail
