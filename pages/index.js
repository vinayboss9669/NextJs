import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import styles from "../styles/home.module.css"; // Changed from './styles/home.module.css'

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
     

    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 rounded-xl`}
      style={{ background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" }}
    >
      <Head>
        <title>Hunting Coder</title>
        <meta
          name="description"
          content="A Next.js starter page for Hunting Coder"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <nav
        className={`row-start-1 self-start w-full bg-brown shadow-md py-3 px-6 ${styles.mainnav} rounded-xl`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between rounded-md">
          <div className="flex items-center">
            <h1 className={`text-xl font-bold text-gray-800 mr-10 ${styles.title}`}>
              Hunting Coder
            </h1>
          </div>
          <ul className={`flex gap-3 `}> {/* Reduced gap from 8 to 3 */}
            <li>
              <a
                href="/"
                className="font-medium text-gray-800 hover:text-blue-600 transition-colors px-1 py-0.5"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="font-medium text-gray-800 hover:text-blue-600 transition-colors px-1 py-0.5"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="font-medium text-gray-800 hover:text-blue-600 transition-colors px-1 py-0.5"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="font-medium text-gray-800 hover:text-blue-600 transition-colors px-1 py-0.5"
              >
                Blog
              </a>
            </li>
          </ul>
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </nav>

      <h1 className="font-bold text-4xl text-center">
        Welcome to Hunting Coder
      </h1>

      <div className={`${styles.blogs} rounded-xl`}>
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
        <div className={`${styles.blogItem} rounded-lg`}>
          <h2 className={styles["blog-title"]}>
            How to learn Javascript in 2025
          </h2>
          <p className={styles["blog-description"]}>
            Javascript is the language use to design interactive web pages.
          </p>
        </div>
      </div>
      
    </div>
  );
}
