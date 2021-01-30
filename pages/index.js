import Head from 'next/head'
import Layout from "../components/Layout";
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>this is adam ryan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        Main page here
      </Layout>;
    </div>
  )
}
