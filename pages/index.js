import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import styles from "../styles/home.module.css"; // Changed from './styles/home.module.css'
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
     <>
     

      <Head>
        <title>Hunting Coder</title>
        <meta
          name="description"
          content="A Next.js starter page for Hunting Coder"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      
      

      <h1 className="font-bold text-4xl text-center">
        Welcome to Hunting Coder
      </h1>


     <img src="coder.avif" alt="Coder" className="w-full mt-8 h-auto" />

      <div className={`${styles.blogs} rounded-xl mt-4 ml-15 mr-15 mb-8 p-6 bg-white shadow-md`}>
        <div className={`${styles.blogItem} rounded-lg`}>
          <Link href="/blogpoat/how-to-learn-javascript-2025">
            <h2 className={styles["blog-title"]}>
              How to learn Javascript in 2025
            </h2>
          </Link>
          <p className={styles["blog-description"]}>
            Javascript is the language use to design interactive web pages.
          </p>
        </div>
        <div className={`${styles.blogItem} rounded-lg`}>
          <h2 className={styles["blog-title"]}>
            How to learn Javascript in 2025
          </h2>
          <p className={styles["blog-description"]}>
            Javascript is the language use to design interactive web pages.
          </p>
        </div>
        <div className={`${styles.blogItem} rounded-lg`}>
          <h2 className={styles["blog-title"]}>
            How to learn Javascript in 2025
          </h2>
          <p className={styles["blog-description"]}>
            Javascript is the language use to design interactive web pages.
          </p>
        </div>
      </div>
      
    {/* </div> */}
  
    </>
    
  );
}
