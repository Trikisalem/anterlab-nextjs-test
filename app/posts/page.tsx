// This demonstrates server-side data fetching in App Router
// The fetch happens on the server during the request

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

async function getPosts(): Promise<Post[]> {
  // This fetch happens on the server
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // Next.js extends fetch with additional options
    next: { revalidate: 3600 }, // Revalidate every hour
  })

  if (!response.ok) {
    throw new Error("Failed to fetch posts")
  }

  return response.json()
}

export default async function PostsPage() {
  // This is a Server Component - the data is fetched on the server
  const posts = await getPosts()

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Posts</h1>
        <p className="text-gray-600">
          This page demonstrates server-side data fetching using Server Components. Data is fetched on the server and
          rendered before sending to the client.
        </p>
      </div>

      <div className="space-y-6">
        {posts.slice(0, 10).map((post) => (
          <article key={post.id} className="card">
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-xl font-semibold text-gray-900 capitalize">{post.title}</h2>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Post #{post.id}
              </span>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">{post.body}</p>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>User ID: {post.userId}</span>
              <span>Server-side rendered</span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">Server-Side Rendering Benefits:</h3>
        <ul className="text-blue-800 text-sm space-y-1">
          <li>• Faster initial page load</li>
          <li>• Better SEO (content is available to crawlers)</li>
          <li>• Works without JavaScript</li>
          <li>• Reduced client-side bundle size</li>
        </ul>
      </div>
    </div>
  )
}
