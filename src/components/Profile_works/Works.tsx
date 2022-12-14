import React from 'react'
import styles from './Works.module.scss'
import { WorkData } from '@/types/types'

const Works: React.FC<WorkData> = (workData: WorkData) => {
  return (
    <>
      <div className={styles.workBox}>
        <div className={styles.workBoxContains}>
          <div className={styles.workDsp}>
            <h3>{workData.head}</h3>
            <p>{workData.detail}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Works
