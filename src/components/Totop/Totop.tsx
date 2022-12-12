import Link from 'next/link'
import React from 'react'
import styles from './Totop.module.scss'

const Linkbox: React.FC = () => {
  return (
    <>
      <Link className={styles.pageTop} href='#'>
        <span className={styles.pageTopArrow}></span>
      </Link>
    </>
  )
}

export default Linkbox
