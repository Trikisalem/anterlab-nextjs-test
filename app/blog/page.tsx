import Link from "next/link"

// Static blog data - in a real app, this might come from a CMS or markdown files
const blogPosts = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    summary: "Learn the basics of Next.js and how to build modern React applications with server-side rendering.",
    date: "2024-01-15",
    author: "John Doe",
  },
  {
    slug: "understanding-react-hooks",
    title: "Understanding React Hooks",
    summary: "A comprehensive guide to React Hooks and how they can simplify your component logic.",
    date: "2024-01-10",
    author: "Jane Smith",
  },
  {
    slug: "tailwind-css-best-practices",
    title: "Tailwind CSS Best Practices",
    summary: "Tips and tricks for writing maintainable and scalable CSS with Tailwind CSS framework.",
    date: "2024-01-05",
    author: "Mike Johnson",
  },
]

// This demonstrates static generation - the page is built at build time
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-gray-600">
          Welcome to our blog! Here you'll find articles about web development, React, and Next.js.
        </p>
      </div>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article key={post.slug} className="card">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-3">{post.summary}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>By {post.author}</span>
                  <span className="mx-2">•</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </div>
            </div>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800 font-medium">
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
