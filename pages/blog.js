import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/home.module.css';

//step1: Collect all the files from blogdata directory
//step2: Iterate through them and display them

const Blog = () => {
   
    
    const [animatedPosts, setAnimatedPosts] = useState([]);
    
    // Blog posts data
    const blogPosts = [
        {
            id: 1,
            title: "Modern JavaScript Features Every Coder Should Know",
            excerpt: "Discover the essential JavaScript features that can dramatically improve your coding efficiency and code quality.",
            image: "/coder.avif",
            category: "JavaScript",
            date: "May 15, 2023"
        },
        {
            id: 2,
            title: "The Rise of TypeScript in Web Development",
            excerpt: "Why TypeScript has become the go-to language for large scale applications and how it's changing the development landscape.",
            image: "/coder.avif",
            category: "TypeScript",
            date: "June 3, 2023"
        },
        {
            id: 3,
            title: "Optimizing React Performance: Best Practices",
            excerpt: "Learn techniques to optimize your React applications for better speed, responsiveness, and user experience.",
            image: "/coder.avif",
            category: "React",
            date: "July 22, 2023"
        },
        {
            id: 4,
            title: "The Future of Web Development with Next.js",
            excerpt: "How Next.js is redefining the way we build web applications with its powerful features and optimizations.",
            image: "/coder.avif",
            category: "Next.js",
            date: "August 10, 2023"
        }
    ];

    // Animation effect when component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedPosts(blogPosts.map(post => post.id));
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Head>
                <title>Blog | Hunting Coder</title>
                <meta name="description" content="Blog articles for developers and coding enthusiasts" />
            </Head>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <div className="relative rounded-xl overflow-hidden mb-16 h-80">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-80"></div>
                    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 animate-fadeIn">
                            The Hunting Coder Blog
                        </h1>
                        <p className="text-xl text-white max-w-3xl animate-slideUp">
                            Insights, tutorials, and stories for modern developers looking to level up their coding skills
                        </p>
                    </div>
                </div>

                {/* Featured Categories */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {['JavaScript', 'React', 'Next.js', 'TypeScript', 'Backend'].map((category) => (
                        <span 
                            key={category}
                            className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all 
                                       hover:scale-105 ${category === 'JavaScript' ? 'bg-yellow-200 text-yellow-800' : 
                                       category === 'React' ? 'bg-blue-200 text-blue-800' : 
                                       category === 'Next.js' ? 'bg-black text-white' : 
                                       category === 'TypeScript' ? 'bg-blue-700 text-white' : 
                                       'bg-green-200 text-green-800'}`}
                        >
                            {category}
                        </span>
                    ))}
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {blogPosts.map((post) => (
                        <div 
                            key={post.id} 
                            className={`bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl 
                                      ${animatedPosts.includes(post.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{transitionDelay: `${post.id * 150}ms`}}
                        >
                            <div className="relative h-60 w-full">
                                <img 
                                    src={post.image} 
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                                    <Link href={`/blogpost/${post.id}`}>
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                                <Link 
                                    href={`/blogpost/${post.id}`}
                                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                                >
                                    Read more
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Newsletter Section */}
                <div className="mt-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 text-white text-center">
                    <h2 className="text-2xl font-bold mb-4">Join Our Coding Community</h2>
                    <p className="mb-6 max-w-2xl mx-auto">Get weekly coding tips, tutorials and resources directly to your inbox.</p>
                    <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="flex-1 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <button className="bg-white text-blue-600 font-medium px-6 py-2 rounded-md hover:bg-gray-100 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Add some global styles */}
            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 1s ease-out forwards;
                }
                
                .animate-slideUp {
                    animation: slideUp 0.8s ease-out forwards;
                }
            `}</style>
        </>
    );
};

export default Blog;