"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "../context/AuthContext"

export default function DashboardPage() {
  const { isAuthenticated, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  // Show loading or redirect while checking authentication
  if (!isAuthenticated) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="card text-center">
          <p className="text-gray-500">Checking authentication...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
        <p className="text-gray-600">
          Welcome to your protected dashboard! This page is only accessible to authenticated users.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* User Info Card */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">User Information</h3>
          <div className="space-y-2">
            <p>
              <strong>Username:</strong> {user?.username}
            </p>
            <p>
              <strong>Status:</strong> <span className="text-green-600">Active</span>
            </p>
            <p>
              <strong>Role:</strong> Administrator
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Total Users</h3>
          <div className="text-3xl font-bold text-blue-600">1,234</div>
          <p className="text-sm text-gray-500 mt-1">+12% from last month</p>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Revenue</h3>
          <div className="text-3xl font-bold text-green-600">$45,678</div>
          <p className="text-sm text-gray-500 mt-1">+8% from last month</p>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Orders</h3>
          <div className="text-3xl font-bold text-purple-600">567</div>
          <p className="text-sm text-gray-500 mt-1">+15% from last month</p>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Conversion Rate</h3>
          <div className="text-3xl font-bold text-orange-600">3.2%</div>
          <p className="text-sm text-gray-500 mt-1">+0.5% from last month</p>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Support Tickets</h3>
          <div className="text-3xl font-bold text-red-600">23</div>
          <p className="text-sm text-gray-500 mt-1">-5 from yesterday</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-gray-200">
              <div>
                <p className="font-medium">New user registration</p>
                <p className="text-sm text-gray-500">john.doe@example.com</p>
              </div>
              <span className="text-sm text-gray-400">2 minutes ago</span>
            </div>

            <div className="flex items-center justify-between py-2 border-b border-gray-200">
              <div>
                <p className="font-medium">Order completed</p>
                <p className="text-sm text-gray-500">Order #12345 - $299.99</p>
              </div>
              <span className="text-sm text-gray-400">15 minutes ago</span>
            </div>

            <div className="flex items-center justify-between py-2 border-b border-gray-200">
              <div>
                <p className="font-medium">Support ticket resolved</p>
                <p className="text-sm text-gray-500">Ticket #789 - Login issue</p>
              </div>
              <span className="text-sm text-gray-400">1 hour ago</span>
            </div>

            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium">System backup completed</p>
                <p className="text-sm text-gray-500">Database backup successful</p>
              </div>
              <span className="text-sm text-gray-400">3 hours ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* Protected Route Info */}
      <div className="mt-8">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-semibold text-green-900 mb-2">🔒 Protected Route</h3>
          <p className="text-green-800 text-sm">
            This dashboard is protected by authentication. Users must be logged in to access this content. The
            authentication state is managed using Context API and persisted in localStorage.
          </p>
        </div>
      </div>
    </div>
  )
}
