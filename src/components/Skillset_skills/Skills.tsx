import Image from 'next/image'
import React from 'react'
import styles from './Skills.module.scss'

interface SkillData {
  head: string
  srcurl: string
  star: string
}

const Skillset: React.FC<SkillData> = (skillData: SkillData) => {
  return (
    <>
      <div className={styles.skillBox}>
        <div className={styles.skillBoxContains}>
          <div className={styles.skillBoxLeft}>
            <Image
              src={skillData.srcurl}
              alt={`${skillData.head} libing standardのロゴ画像です。`}
              width={72}
              height={72}
            />
          </div>
          <div className={styles.skillBoxRight}>
            <h2>
              {skillData.head} - {skillData.star}
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skillset
