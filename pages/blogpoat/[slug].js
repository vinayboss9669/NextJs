import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";


//step1: Fetch the blog post data based on the slug
//step2: Display the blog post content

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [isLoaded, setIsLoaded] = useState(false);
  const [post, setPost] = useState(null);

  // Mock blog post data
  const blogPosts = {
    "how-to-learn-javascript-2025": {
      title: "How to Learn JavaScript in 2025",
      date: "October 16, 2025",
      author: "Alex Chen",
      authorImage: "/author.jpg",
      coverImage: "/coder.avif",
      category: "JavaScript",
      readTime: "8 min read",
      content: [
        {
          type: "paragraph",
          text: "JavaScript continues to evolve rapidly, and in 2025, it remains one of the most essential skills for web developers. With the release of ECMAScript 2025, new features have made the language even more powerful and developer-friendly.",
        },
        {
          type: "heading",
          text: "Start with the Fundamentals",
        },
        {
          type: "paragraph",
          text: "Despite all the frameworks and libraries available, understanding core JavaScript concepts is still crucial. Variables, functions, loops, and objects form the backbone of your JavaScript knowledge.",
        },
        {
          type: "code",
          language: "javascript",
          text: `// Modern variable declarations
            const user = {
            name: 'Sarah',
            skills: ['JavaScript', 'React', 'Node.js'],
            isActive: true
            };

            // Using optional chaining and nullish coalescing
            const skill = user?.skills[0] ?? 'No skills found';

            // Using modern array methods
            const activeSkills = user.skills.filter(skill => 
            skill.startsWith('R')).map(skill => skill.toUpperCase());
            `,
        },
        {
          type: "heading",
          text: "Learn Modern Frameworks",
        },
        {
          type: "paragraph",
          text: "After mastering the basics, dive into frameworks like React 20, Angular 17, or Vue 5. These frameworks have evolved significantly since their earlier versions and offer powerful tools for building complex applications.",
        },
        {
          type: "image",
          src: "/framework.jpg",
          alt: "Modern JavaScript frameworks",
          caption:
            "The JavaScript framework landscape has evolved dramatically by 2025",
        },
        {
          type: "heading",
          text: "Embrace AI-Assisted Development",
        },
        {
          type: "paragraph",
          text: "AI coding assistants have become essential tools for JavaScript developers. GitHub Copilot X and Amazon CodeWhisperer 3.0 can now understand complex project contexts and generate not just code snippets but entire components with proper architecture.",
        },
        {
          type: "quote",
          text: "The best JavaScript developers in 2025 aren't those who memorize syntax, but those who understand architectural patterns and can effectively direct AI to generate robust, maintainable code.",
          author: "Mia Johnson, CTO at TechForward",
        },
        {
          type: "heading",
          text: "Focus on Performance Optimization",
        },
        {
          type: "paragraph",
          text: "With web applications becoming increasingly complex, understanding how to optimize JavaScript performance is more important than ever. Learn about Web Workers, the new SharedArrayBuffer improvements, and how to efficiently use the browser's rendering pipeline.",
        },
        {
          type: "paragraph",
          text: "By following these guidelines and dedicating consistent time to practice, you can become proficient in JavaScript even in the complex development landscape of 2025.",
        },
      ],
    },
    "how-to-learn-flask-2025": {
      title: "How to Learn JavaScript in 2025",
      date: "October 16, 2025",
      author: "Alex Chen",
      authorImage: "/author.jpg",
      coverImage: "/coder.avif",
      category: "JavaScript",
      readTime: "8 min read",
      content: [
        {
          type: "paragraph",
          text: "JavaScript continues to evolve rapidly, and in 2025, it remains one of the most essential skills for web developers. With the release of ECMAScript 2025, new features have made the language even more powerful and developer-friendly.",
        },
        {
          type: "heading",
          text: "Start with the Fundamentals",
        },
        {
          type: "paragraph",
          text: "Despite all the frameworks and libraries available, understanding core JavaScript concepts is still crucial. Variables, functions, loops, and objects form the backbone of your JavaScript knowledge.",
        },
        {
          type: "code",
          language: "javascript",
          text: `// Modern variable declarations
            const user = {
            name: 'Sarah',
            skills: ['JavaScript', 'React', 'Node.js'],
            isActive: true
            };

            // Using optional chaining and nullish coalescing
            const skill = user?.skills[0] ?? 'No skills found';

            // Using modern array methods
            const activeSkills = user.skills.filter(skill => 
            skill.startsWith('R')).map(skill => skill.toUpperCase());
            `,
        },
        {
          type: "heading",
          text: "Learn Modern Frameworks",
        },
        {
          type: "paragraph",
          text: "After mastering the basics, dive into frameworks like React 20, Angular 17, or Vue 5. These frameworks have evolved significantly since their earlier versions and offer powerful tools for building complex applications.",
        },
        {
          type: "image",
          src: "/framework.jpg",
          alt: "Modern JavaScript frameworks",
          caption:
            "The JavaScript framework landscape has evolved dramatically by 2025",
        },
        {
          type: "heading",
          text: "Embrace AI-Assisted Development",
        },
        {
          type: "paragraph",
          text: "AI coding assistants have become essential tools for JavaScript developers. GitHub Copilot X and Amazon CodeWhisperer 3.0 can now understand complex project contexts and generate not just code snippets but entire components with proper architecture.",
        },
        {
          type: "quote",
          text: "The best JavaScript developers in 2025 aren't those who memorize syntax, but those who understand architectural patterns and can effectively direct AI to generate robust, maintainable code.",
          author: "Mia Johnson, CTO at TechForward",
        },
        {
          type: "heading",
          text: "Focus on Performance Optimization",
        },
        {
          type: "paragraph",
          text: "With web applications becoming increasingly complex, understanding how to optimize JavaScript performance is more important than ever. Learn about Web Workers, the new SharedArrayBuffer improvements, and how to efficiently use the browser's rendering pipeline.",
        },
        {
          type: "paragraph",
          text: "By following these guidelines and dedicating consistent time to practice, you can become proficient in JavaScript even in the complex development landscape of 2025.",
        },
      ],
    },
    // "how-to-learn-javascript-2025": {
    //   title: "How to Learn JavaScript in 2025",
    //   date: "October 16, 2025",
    //   author: "Alex Chen",
    //   authorImage: "/author.jpg",
    //   coverImage: "/coder.avif",
    //   category: "JavaScript",
    //   readTime: "8 min read",
    //   content: [
    //     {
    //       type: "paragraph",
    //       text: "JavaScript continues to evolve rapidly, and in 2025, it remains one of the most essential skills for web developers. With the release of ECMAScript 2025, new features have made the language even more powerful and developer-friendly.",
    //     },
    //     {
    //       type: "heading",
    //       text: "Start with the Fundamentals",
    //     },
    //     {
    //       type: "paragraph",
    //       text: "Despite all the frameworks and libraries available, understanding core JavaScript concepts is still crucial. Variables, functions, loops, and objects form the backbone of your JavaScript knowledge.",
    //     },
    //     {
    //       type: "code",
    //       language: "javascript",
    //       text: `// Modern variable declarations
    //         const user = {
    //         name: 'Sarah',
    //         skills: ['JavaScript', 'React', 'Node.js'],
    //         isActive: true
    //         };

    //         // Using optional chaining and nullish coalescing
    //         const skill = user?.skills[0] ?? 'No skills found';

    //         // Using modern array methods
    //         const activeSkills = user.skills.filter(skill => 
    //         skill.startsWith('R')).map(skill => skill.toUpperCase());
    //         `,
    //     },
    //     {
    //       type: "heading",
    //       text: "Learn Modern Frameworks",
    //     },
    //     {
    //       type: "paragraph",
    //       text: "After mastering the basics, dive into frameworks like React 20, Angular 17, or Vue 5. These frameworks have evolved significantly since their earlier versions and offer powerful tools for building complex applications.",
    //     },
    //     {
    //       type: "image",
    //       src: "/framework.jpg",
    //       alt: "Modern JavaScript frameworks",
    //       caption:
    //         "The JavaScript framework landscape has evolved dramatically by 2025",
    //     },
    //     {
    //       type: "heading",
    //       text: "Embrace AI-Assisted Development",
    //     },
    //     {
    //       type: "paragraph",
    //       text: "AI coding assistants have become essential tools for JavaScript developers. GitHub Copilot X and Amazon CodeWhisperer 3.0 can now understand complex project contexts and generate not just code snippets but entire components with proper architecture.",
    //     },
    //     {
    //       type: "quote",
    //       text: "The best JavaScript developers in 2025 aren't those who memorize syntax, but those who understand architectural patterns and can effectively direct AI to generate robust, maintainable code.",
    //       author: "Mia Johnson, CTO at TechForward",
    //     },
    //     {
    //       type: "heading",
    //       text: "Focus on Performance Optimization",
    //     },
    //     {
    //       type: "paragraph",
    //       text: "With web applications becoming increasingly complex, understanding how to optimize JavaScript performance is more important than ever. Learn about Web Workers, the new SharedArrayBuffer improvements, and how to efficiently use the browser's rendering pipeline.",
    //     },
    //     {
    //       type: "paragraph",
    //       text: "By following these guidelines and dedicating consistent time to practice, you can become proficient in JavaScript even in the complex development landscape of 2025.",
    //     },
    //   ],
    // },
    // Additional blog posts could be defined here
  };

  // Simulate data fetching
  useEffect(() => {
    if (slug) {
      // In a real app, you would fetch from an API
      setTimeout(() => {
        setPost(
          blogPosts[slug] || {
            title: "Blog Post Not Found",
            content: [
              {
                type: "paragraph",
                text: "The requested blog post could not be found.",
              },
            ],
          }
        );
        setIsLoaded(true);
      }, 500);
    }
  }, [slug]);

  // Render loading state
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-32 w-32 bg-blue-200 rounded-full mb-4"></div>
          <div className="h-4 w-48 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  // Render content components based on type
  const renderContent = (item, index) => {
    switch (item.type) {
      case "paragraph":
        return (
          <p
            key={index}
            className="my-4 text-gray-700 leading-relaxed animate-fadeIn"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {item.text}
          </p>
        );
      case "heading":
        return (
          <h2
            key={index}
            className="text-2xl font-bold mt-8 mb-4 text-gray-900 animate-fadeIn"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {item.text}
          </h2>
        );
      case "code":
        return (
          <div
            key={index}
            className="my-6 animate-fadeIn"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <pre className="bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto">
              <code className="font-mono text-sm">{item.text}</code>
            </pre>
          </div>
        );
      case "image":
        return (
          <figure
            key={index}
            className="my-8 animate-fadeIn"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-auto rounded-lg shadow-md"
              onError={(e) => {
                e.target.src = "/coder2.avif";
              }} // Fallback image
            />
            {item.caption && (
              <figcaption className="text-center text-gray-500 mt-2 text-sm">
                {item.caption}
              </figcaption>
            )}
          </figure>
        );
      case "quote":
        return (
          <blockquote
            key={index}
            className="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-700 animate-fadeIn"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <p className="mb-2">{item.text}</p>
            {item.author && (
              <footer className="text-sm text-gray-600">— {item.author}</footer>
            )}
          </blockquote>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>{post?.title || slug} | Hunting Coder</title>
        <meta
          name="description"
          content={post?.content[0]?.text || `Article about ${slug}`}
        />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link
          href="/blog"
          className="text-blue-600 hover:underline flex items-center mb-8 animate-slideRight"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to all articles
        </Link>

        {/* Hero image */}
        <div className="relative h-80 w-full mb-8 rounded-xl overflow-hidden animate-fadeIn">
          <img
            src={post?.coverImage || "/coder3.avif"}
            alt={post?.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full mb-2">
              {post?.category || "Coding"}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              {post?.title}
            </h1>
          </div>
        </div>

        {/* Article metadata */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6 animate-fadeIn">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
              <img
                src={post?.authorImage || "/author.jpg"}
                alt={post?.author}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/coder2.avif";
                }} // Fallback image
              />
            </div>
            <div>
              <div className="font-medium text-gray-900">
                {post?.author || "Anonymous"}
              </div>
              <div className="text-sm text-gray-500">{post?.date}</div>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            {post?.readTime || "5 min read"}
          </div>
        </div>

        {/* Article content */}
        <article className="prose lg:prose-lg max-w-none">
          {post?.content?.map(renderContent)}
        </article>

        {/* Share and tags section */}
        <div className="border-t border-gray-200 mt-12 pt-6 animate-fadeIn">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
              <span className="text-gray-700 font-medium">Tags:</span>
              {[
                "JavaScript",
                "Web Development",
                "Programming",
                "Beginners",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-gray-200 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center">
              <span className="mr-3 text-gray-700">Share:</span>
              <div className="flex space-x-2">
                {["Twitter", "Facebook", "LinkedIn"].map((platform) => (
                  <button
                    key={platform}
                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-300"
                  >
                    {platform.charAt(0)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Author bio */}
        <div className="bg-blue-50 rounded-xl p-6 mt-12 animate-fadeIn">
          <div className="flex items-center mb-4">
            <img
              src={post?.authorImage || "/author.jpg"}
              alt={post?.author}
              className="w-16 h-16 rounded-full mr-4"
              onError={(e) => {
                e.target.src = "/coder.avif";
              }}
            />
            <div>
              <h3 className="font-bold text-gray-900">
                About {post?.author || "the Author"}
              </h3>
              <p className="text-sm text-gray-600">
                Senior Developer & Technical Writer
              </p>
            </div>
          </div>
          <p className="text-gray-700">
            A passionate developer with over 8 years of experience in web
            technologies. Specializes in JavaScript and modern frontend
            frameworks, with a love for teaching and simplifying complex
            concepts.
          </p>
        </div>

        {/* Related articles */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            You might also like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Understanding JavaScript Promises in Depth",
                excerpt:
                  "Master asynchronous JavaScript with promises and async/await patterns.",
                image: "/coder3.avif",
              },
              {
                title: "Building Accessible Web Applications",
                excerpt:
                  "Learn how to create web apps that everyone can use, regardless of ability.",
                image: "/coder4.avif",
              },
            ].map((article, i) => (
              <div
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-fadeIn"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    <a href="#">{article.title}</a>
                  </h3>
                  <p className="text-gray-700 text-sm">{article.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideRight {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideRight {
          animation: slideRight 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default BlogPost;


// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { slug: "how-to-learn-flask" } },
//       { params: { slug: "how-to-learn-javascript-2025" } },
//       { params: { slug: "how-to-learn-nextjs" } },

//       // Add more pre-rendered paths here if needed
//     ],
//     fallback: true, // or 'blocking' if you prefer
//   };
// }

// export async function getStaticProps(context){
//     const { slug } = context.params;
//     const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);


//     let myblog=await res.json();

//     return {
//       props:{
//         myblog
//       }
//     }

    // let myblog=await fs.promise.readFile(`panda/blogdata/${slug}.json`,'utf-8');

    // return {
    //     props:{
    //        myblog: JSON.parse(myblog)
    //     }
    // }
// }

//cdn se easy and fast render 
//out floder use it beacuse its fast render the file of browser