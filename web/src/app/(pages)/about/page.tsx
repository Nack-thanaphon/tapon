import Head from 'next/head';

export const revalidate = 60; // Revalidate every 60 seconds

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function HomePage() {
  // Fetch posts
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'force-cache'
  });
  const posts = (await res.json()) as Post[];

  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="A collection of interesting blog posts." />
        <meta property="og:title" content="My Blog" />
        <meta property="og:description" content="A collection of interesting blog posts." />
        <meta property="og:type" content="website" />
      </Head>
      {/* Main container */}
      <main className="max-w-xl mx-auto p-4 font-sans">
        <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
        {/* Grid of posts */}
        <div className="grid gap-4">
          {posts.slice(0, 10).map(post => (
            <div
              key={post.id}
              className="p-4 border border-gray-200 rounded-lg bg-white shadow-md"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600">{post.body}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}