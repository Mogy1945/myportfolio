import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Linkbox.module.scss'

interface Linkbox {
  href: string
  srcUrl: string
  name: string
  detail: string
}

const Linkbox: React.FC<Linkbox> = (linkbox: Linkbox) => {
  return (
    <>
      <div className={styles.linkBox}>
        <Link href={linkbox.href}>
          <div className={styles.linkBoxContains}>
            <div className={styles.linkBoxLeft}>
              <Image
                src={linkbox.srcUrl}
                alt={`${linkbox.name}ページへのリンクです。`}
                width={72}
                height={72}
              />
            </div>
            <div className={styles.linkBoxRight}>
              <h2>{linkbox.name}</h2>
              <p>{linkbox.detail}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Linkbox
