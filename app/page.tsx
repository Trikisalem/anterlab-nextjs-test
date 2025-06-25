"use client"

import Link from "next/link"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Next.js Evaluation Project</h1>
        <p className="text-xl text-gray-600 mb-8">A comprehensive demonstration of Next.js features and capabilities</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/blog" className="card hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">📝 Blog</h3>
          <p className="text-gray-600">Static blog with dynamic routes and posts</p>
        </Link>

        <Link href="/contact" className="card hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">📧 Contact Form</h3>
          <p className="text-gray-600">Form with validation and API integration</p>
        </Link>

        <Link href="/users" className="card hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">👥 Users</h3>
          <p className="text-gray-600">Client-side data fetching with useEffect</p>
        </Link>

        <Link href="/posts" className="card hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">📄 Posts</h3>
          <p className="text-gray-600">Server-side data fetching demonstration</p>
        </Link>

        <Link href="/cart" className="card hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">🛒 Shopping Cart</h3>
          <p className="text-gray-600">Context API for state management</p>
        </Link>

        <Link href="/search" className="card hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">🔍 Search</h3>
          <p className="text-gray-600">Real-time search and filtering</p>
        </Link>

        <Link href="/dashboard" className="card hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">🔒 Dashboard</h3>
          <p className="text-gray-600">Protected route with authentication</p>
        </Link>

        <Link href="/about" className="card hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">ℹ️ About</h3>
          <p className="text-gray-600">Learn more about this project</p>
        </Link>
      </div>
    </div>
  )
}
