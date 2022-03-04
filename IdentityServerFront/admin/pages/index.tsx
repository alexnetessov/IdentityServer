import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import "antd/dist/antd.css";

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
