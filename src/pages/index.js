import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.container}>

        <Head>

          <title>Code Hunter</title>
          <meta name="description" content="a blog for coders" />
          <meta name="keywords" content="next,nextjs,nextjs blog" />
          
        </Head>

        <main className={styles.main}>
          

          <div className={styles.description}>
            <p>
              Code spot for a Code Hunter
            </p>
          </div>
          <div className={styles.center}>
            <h1 className={styles.CH_name}>  Code Hunter</h1>

          </div>
          <div>
          <img className={styles.myLogo} src="/CH_logo.png" alt="Code Hunter Logo"></img>
          </div>

          <div className={styles.blogs}>

            <div className={styles.blogItem}>
              <h2>Popular Blogs</h2>
              <h3>How to learn JavaScript in 2023</h3>
              <p>JavaScript is thelanguage is used to design logic...</p>
              <h3>How to learn JavaScript in 2023</h3>
              <p>JavaScript is thelanguage is used to design logic...</p>
              <h3>How to learn JavaScript in 2023</h3>
              <p>JavaScript is thelanguage is used to design logic...</p>

            </div>

          </div>

        </main>
      </div>
    </>
  )
}
