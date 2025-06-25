import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { CartProvider } from "./context/CartContext"
import { AuthProvider } from "./context/AuthContext"
import Navbar from "./components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Next.js Evaluation Project",
  description: "Comprehensive Next.js application demonstrating key features",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <div className="min-h-screen bg-gray-50">
              <Navbar />
              <main className="container mx-auto px-4 py-8">{children}</main>
            </div>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
