'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface BlogPostPageProps {
  blogPosts: any[]
}

export const ClientBlogPostPage = ({ blogPosts }: BlogPostPageProps) => {
  const [slug, setSlug] = useState<string | null>(null)

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const slugValue = searchParams.get('slug')
    setSlug(slugValue)
  }, [])

  if (!slug) return null // Ne pas rendre tant que le slug n'est pas prêt

  const post = blogPosts.find((p: any) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Blog
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <div className="flex items-center text-gray-600 mb-4">
              <span>By {post.author}</span>
              <span className="mx-2">•</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <p className="text-xl text-gray-600">{post.summary}</p>
          </header>

          <div className="prose prose-lg max-w-none">
            {post.content.split('\n').map((paragraph: string, index: number) => {
              if (paragraph.trim() === '') return null

              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              }

              if (paragraph.startsWith('###')) {
                return (
                  <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                )
              }

              if (paragraph.includes('```')) {
                const codeMatch = paragraph.match(/```(\w+)?\n([\s\S]*?)```/)
                if (codeMatch) {
                  return (
                    <pre key={index} className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4">
                      <code className="text-sm">{codeMatch[2]}</code>
                    </pre>
                  )
                }
              }

              if (paragraph.startsWith('`') && paragraph.endsWith('`')) {
                return (
                  <code key={index} className="bg-gray-100 px-2 py-1 rounded text-sm">
                    {paragraph.slice(1, -1)}
                  </code>
                )
              }

              return (
                <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </article>
      </div>
    </div>
  )
}
