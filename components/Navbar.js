import Link from 'next/link';
import React from 'react';
import styles from "../styles/home.module.css";

export default function Navbar() {
    return (
        <nav
        className={`row-start-1 self-start w-full bg-brown shadow-md py-3 px-6 ${styles.mainnav} rounded-xl`}
      >
      
        <div className="max-w-7xl mx-auto flex items-center justify-between rounded-md">
          <div className="flex items-center">
            <h1 className={`text-xl font-bold text-black mr-10 ${styles.title}`}>
              Hunting Coder
            </h1>
          </div>
          <ul className={`flex gap-3 `}> {/* Reduced gap from 8 to 3 */}
            <li>
              <a
                href="/"
                className="font-medium text-black hover:text-blue-600 transition-colors px-1 py-0.5"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="font-medium text-black hover:text-blue-600 transition-colors px-1 py-0.5"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="font-medium text-black hover:text-blue-600 transition-colors px-1 py-0.5"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="font-medium text-black hover:text-blue-600 transition-colors px-1 py-0.5"
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
    );
}