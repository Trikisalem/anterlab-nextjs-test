"use client"

import { useState, useEffect } from "react"

interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        if (!response.ok) {
          throw new Error("Failed to fetch users")
        }

        const userData = await response.json()
        setUsers(userData)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Users</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="card animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Users</h1>
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">Error: {error}</div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Users</h1>
        <p className="text-gray-600">
          This page demonstrates client-side data fetching using useEffect. Data is fetched from JSONPlaceholder API.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="card">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{user.name}</h3>
              <p className="text-gray-600">@{user.username}</p>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <span className="font-medium text-gray-700 w-16">Email:</span>
                <a href={`mailto:${user.email}`} className="text-blue-600 hover:text-blue-800">
                  {user.email}
                </a>
              </div>

              <div className="flex items-center">
                <span className="font-medium text-gray-700 w-16">Phone:</span>
                <a href={`tel:${user.phone}`} className="text-blue-600 hover:text-blue-800">
                  {user.phone}
                </a>
              </div>

              <div className="flex items-center">
                <span className="font-medium text-gray-700 w-16">Website:</span>
                <a
                  href={`http://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  {user.website}
                </a>
              </div>

              <div className="pt-2 border-t border-gray-200">
                <p className="font-medium text-gray-700">{user.company.name}</p>
                <p className="text-gray-600 text-xs italic">"{user.company.catchPhrase}"</p>
              </div>

              <div className="pt-2">
                <p className="text-gray-600 text-xs">
                  {user.address.street}, {user.address.suite}
                  <br />
                  {user.address.city} {user.address.zipcode}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
