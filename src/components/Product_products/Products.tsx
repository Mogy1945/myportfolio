import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Products.module.scss'

interface ProductData {
  linkUrl: string
  srcUrl: string
  name: string
  date: string
  detail: string
  skill: string
}

const Products: React.FC<ProductData> = (productData: ProductData) => {
  return (
    <>
      <div className={styles.productBox}>
        <Link href={productData.linkUrl} target='_blank'>
          <div className={styles.productBoxContains}>
            <div className={styles.productBoxLeft}>
              <Image
                src={productData.srcUrl}
                alt={`プロダクトである${productData.name}のサムネイルです。`}
                width={1000}
                height={1000}
              />
            </div>
            <div className={styles.productBoxRight}>
              <h2>プロダクト名</h2>
              <p>{productData.name}</p>
              <h2>制作日</h2>
              <p>{productData.date}</p>
              <h2>説明</h2>
              <p>{productData.detail}</p>
              <h2>利用技術</h2>
              <p>{productData.skill}</p>
            </div>
          </div>
          <div className={styles.productBtnBox}>
            <p className={styles.productBtn}>このプロダクトを見る</p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Products
