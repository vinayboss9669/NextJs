import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import styles from "../styles/home.module.css";
import Link from 'next/link';
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [animatedElements, setAnimatedElements] = useState(false);

  useEffect(() => {
    // Trigger animation after a small delay
    const animationTimer = setTimeout(() => {
      setAnimatedElements(true);
    }, 100);

    console.log("useEffect is running");
    fetch('http://localhost:3000/api/blogs')
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        console.log(parsed);
        setBlogs(parsed);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching blogs:", error);
        setIsLoading(false);
      });

    return () => clearTimeout(animationTimer);
  }, []);

  return (
    <div className={`${geistSans.className} ${geistMono.className}`}>
      <Head>
        <title>Hunting Coder</title>
        <meta
          name="description"
          content="A Next.js starter page for Hunting Coder"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/code-pattern.png')] bg-repeat"></div>
        </div>
        
        <div className={`container mx-auto px-4 relative z-10 text-center transition-all duration-1000 ${animatedElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-6">
            <Image 
              src="/coder.avif" 
              alt="Hunting Coder Logo" 
              width={120} 
              height={120}
              className="mx-auto rounded-full shadow-lg border-4 border-white pt-6"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Welcome to <span className="text-yellow-300">Hunting Coder</span>
          </h1>
          
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            A community for developers to learn, share, and grow together
          </p>
          
          <div className="flex justify-center gap-4">
            <Link href="/blog">
              <span className="bg-white text-blue-700 hover:bg-blue-100 px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg">
                Explore Blog
              </span>
            </Link>
            <Link href="/about">
              <span className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-all">
                About Us
              </span>
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.92,146.86,106.93,208.35,86.19A771.25,771.25,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative py-12 bg-white">
        <div className={`container mx-auto px-4 max-w-4xl transition-all duration-1000 delay-300 ${animatedElements ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="/coder.avif" 
              alt="Coder" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
              <h2 className="text-3xl font-bold text-white mt-2">Mastering the Art of Coding</h2>
              <p className="text-gray-200 mt-1">Journey through the world of programming with expert insights</p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-1000 delay-500 ${animatedElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Discover the latest insights, tutorials, and tips from our coding experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Skeleton loading
              Array(3).fill().map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 h-96">
                  <div className="bg-gray-200 h-40 rounded-md animate-pulse mb-4"></div>
                  <div className="bg-gray-200 h-6 rounded-md animate-pulse mb-3 w-3/4"></div>
                  <div className="bg-gray-200 h-4 rounded-md animate-pulse mb-2"></div>
                  <div className="bg-gray-200 h-4 rounded-md animate-pulse mb-2 w-5/6"></div>
                  <div className="bg-gray-200 h-4 rounded-md animate-pulse w-4/6"></div>
                  <div className="mt-6">
                    <div className="bg-gray-200 h-8 w-32 rounded-md animate-pulse"></div>
                  </div>
                </div>
              ))
            ) : blogs && blogs.length > 0 ? (
              blogs.map((post, index) => (
                <div 
                  key={post.slug || post.id || index} 
                  className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 
                  ${animatedElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `${500 + index * 150}ms` }}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={post.coverImage || "/coder.avif"} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category || "Coding"}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <Link href={`/blogpoat/${post.slug || 'how-to-learn-javascript-2025'}`}>
                      <h3 className="font-bold text-xl text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                        {post.title || "How to learn Javascript in 2025"}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt || post.content?.substring(0, 100) || "Javascript is the language used to design interactive web pages."}
                    </p>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                          {post.author?.substring(0, 1) || "HC"}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">{post.author || "Hunting Coder"}</span>
                      </div>
                      
                      <Link href={`/blogpoat/${post.slug || 'how-to-learn-javascript-2025'}`} className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // Fallback static blog posts when API fails
              <>
                <div 
                  className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 
                  ${animatedElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `500ms` }}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src="/coder.avif" 
                      alt="JavaScript" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-xs font-medium">
                        JavaScript
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <Link href="/blogpoat/how-to-learn-javascript-2025">
                      <h3 className="font-bold text-xl text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                        How to learn Javascript in 2025
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      Javascript is the language use to design interactive web pages. Learn the essential techniques to become proficient.
                    </p>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                          HC
                        </div>
                        <span className="text-sm text-gray-600 ml-2">Hunting Coder</span>
                      </div>
                      
                      <Link href="/blogpoat/how-to-learn-javascript-2025" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div 
                  className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 
                  ${animatedElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `650ms` }}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src="/coder.avif" 
                      alt="React" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-blue-400 text-blue-900 px-3 py-1 rounded-full text-xs font-medium">
                        React
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <Link href="/blogpoat/mastering-react-2025">
                      <h3 className="font-bold text-xl text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                        Mastering React in 2025
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      React continues to evolve as one of the most popular frontend libraries. Learn the latest features and best practices.
                    </p>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                          HC
                        </div>
                        <span className="text-sm text-gray-600 ml-2">Hunting Coder</span>
                      </div>
                      
                      <Link href="/blogpoat/mastering-react-2025" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div 
                  className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 
                  ${animatedElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `800ms` }}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src="/coder.avif" 
                      alt="Next.js" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                        Next.js
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <Link href="/blogpoat/nextjs-fullstack-development">
                      <h3 className="font-bold text-xl text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                        Next.js for Full-Stack Development
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      Discover how Next.js has evolved into a complete framework for building modern web applications with server-side rendering.
                    </p>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                          HC
                        </div>
                        <span className="text-sm text-gray-600 ml-2">Hunting Coder</span>
                      </div>
                      
                      <Link href="/blogpoat/nextjs-fullstack-development" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          
          <div className={`mt-12 text-center transition-all duration-1000 delay-1000 ${animatedElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link href="/blog">
              <span className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                View All Posts
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-16 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className={`container mx-auto px-4 max-w-3xl text-center transition-all duration-1000 delay-1000 ${animatedElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Coding Community</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter and get the latest tutorials, tips, and resources delivered straight to your inbox.
          </p>
          
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <div className="flex flex-col md:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe Now
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-3">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-1000 delay-700 ${animatedElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Hunting Coder?</h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: "Expert Insights",
                description: "Learn directly from industry professionals with years of experience in the field."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: "Comprehensive Tutorials",
                description: "Step-by-step guides covering everything from basics to advanced programming concepts."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Supportive Community",
                description: "Join thousands of developers who learn, share, and grow together."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`bg-gray-50 rounded-xl p-8 text-center border border-gray-100 hover:shadow-lg transition-all duration-300
                ${animatedElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${700 + index * 150}ms` }}
              >
                <div className="mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Global animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}



//  return <div>
  //   {/* Blog posts will be rendered here */}
  //   <h2 className="text-2xl font-bold mb-4">Latest Blog Posts</h2>
  //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  //     {blogs.map((post) => (
  //       <div key={post.id} className="bg-white rounded-lg shadow-md p-4">
  //         <h3 className="font-semibold text-lg">{post.title}</h3>
  //         <p className="text-gray-600">{post.excerpt}</p>
  //         <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
  //           Read more
  //         </Link>
  //       </div>
  //     ))}
  //   </div>
  // </div>


  // useEffect(() => {
  //            console.log("useffect is running");
  //            fetch('http://localhost:3000/api/blogs').then((a)=>{
  //               return a.json();})
  //               .then((parsed)=>{
  //                  console.log(parsed)
  //               })
  //        }); 
