import { useForm, ValidationError } from '@formspree/react'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Contact.module.scss'
import Header from '@/components/Header/Header'
import Linkbox from '@/components/Linkbox/Linkbox'

export default function Form() {
  const [state, handleSubmit] = useForm('mdojqgde')
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Message, setMessage] = useState('')
  const [errorName, setErrorName] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  if (state.succeeded) {
    return (
      <>
        <Head>
          <title>Contact | Mogy Portfolio</title>
        </Head>
        <main className={styles.main}>
          <h1>Thank you for your Contact!</h1>
          <p className={styles.comment}>
            以下の内容でお問合せを完了いたしました。返信までしばらくお待ちください。
          </p>
          <div className={styles.formContainer}>
            <form>
              <div className={styles.box}>
                <p className={styles.titleResult}>お名前</p>
                <p className={styles.result}>{Name}</p>
              </div>
              <div className={styles.box}>
                <p className={styles.titleResult}>E-mailアドレス</p>
                <p className={styles.result}>{Email}</p>
              </div>
              <div className={styles.box}>
                <p className={styles.titleResult}>お問い合わせ内容</p>
                <p className={styles.result}>{Message}</p>
              </div>
            </form>
          </div>
          <Link href='/' className={styles.bottomLink}>
            記事一覧に戻る
          </Link>
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
        </div>

        <Link className={styles.pageTop} href='#'>
          <span className={styles.pageTopArrow}></span>
        </Link>
      </>
    )
  }
  return (
    <>
      <Head>
        <title>Contact | Mogy Portfolio</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <h3>Contact</h3>
        <p className={styles.comment}>
          お問い合わせの際は、以下項目を
          <span className={styles.notNull}>全て</span>
          記入し、「送信」ボタンを押してください。
        </p>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <div className={styles.box}>
              <p className={styles.title}>お名前</p>
              <input
                id='name'
                name='name'
                type='text'
                placeholder='例）山田太郎'
                onBlur={(e) => {
                  const val = e.target.value
                  const valLENGTH = val.length
                  if (valLENGTH > 0) {
                    setErrorName(false)
                    setName(e.target.value)
                  } else {
                    setErrorName(true)
                    setName('')
                  }
                }}
              />
              {errorName ? (
                <>
                  <p className={styles.errorText}>！必ずご入力をお願いいたします。</p>
                </>
              ) : (
                ''
              )}
            </div>
            <div className={styles.box}>
              <p className={styles.title}>E-mailアドレス</p>
              <input
                id='email'
                type='email'
                name='email'
                placeholder='例）sample@test.co.jp'
                onBlur={(e) => {
                  const val = e.target.value
                  const valLENGTH = val.length
                  if (valLENGTH > 0) {
                    setErrorEmail(false)
                    setEmail(e.target.value)
                  } else {
                    setErrorEmail(true)
                    setEmail('')
                  }
                }}
              />
              {errorEmail ? (
                <>
                  <p className={styles.errorText}>！必ずご入力をお願いいたします。</p>
                </>
              ) : (
                ''
              )}
              <ValidationError prefix='Email' field='email' errors={state.errors} />
            </div>
            <div className={styles.box}>
              <p className={styles.title}>お問い合わせ内容</p>
              <textarea
                id='message'
                name='message'
                placeholder='例）どうしてエンジニアになろうと思ったのですか？'
                onBlur={(e) => {
                  const val = e.target.value
                  const valLENGTH = val.length
                  if (valLENGTH > 0) {
                    setErrorMessage(false)
                    setMessage(e.target.value)
                  } else {
                    setErrorMessage(true)
                    setMessage('')
                  }
                }}
              ></textarea>
              {errorMessage ? (
                <>
                  <p className={styles.errorText}>！必ずご入力をお願いいたします。</p>
                </>
              ) : (
                ''
              )}
              <ValidationError prefix='Message' field='message' errors={state.errors} />
            </div>
            <div className={styles.box}>
              <input
                type='submit'
                disabled={
                  Name.length === 0 || Email.length === 0 || Message.length === 0 ? true : false
                }
                className={styles.submit}
                value='送信'
              />
            </div>
          </form>
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
      </div>

      <Link className={styles.pageTop} href='#'>
        <span className={styles.pageTopArrow}></span>
      </Link>
    </>
  )
}
