"use client"

import { useState, useMemo } from "react"

// Sample data for search demonstration
const items = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    category: "Electronics",
    price: 999,
    description: "Latest Apple smartphone with advanced features",
  },
  {
    id: 2,
    name: "MacBook Air M2",
    category: "Electronics",
    price: 1199,
    description: "Lightweight laptop with Apple M2 chip",
  },
  {
    id: 3,
    name: "AirPods Pro",
    category: "Electronics",
    price: 249,
    description: "Wireless earbuds with noise cancellation",
  },
  { id: 4, name: "Nike Air Max", category: "Shoes", price: 120, description: "Comfortable running shoes" },
  { id: 5, name: "Adidas Ultraboost", category: "Shoes", price: 180, description: "High-performance running shoes" },
  { id: 6, name: "Levi's 501 Jeans", category: "Clothing", price: 60, description: "Classic straight-fit jeans" },
  {
    id: 7,
    name: "Nike Dri-FIT Shirt",
    category: "Clothing",
    price: 25,
    description: "Moisture-wicking athletic shirt",
  },
  {
    id: 8,
    name: "Samsung Galaxy S24",
    category: "Electronics",
    price: 899,
    description: "Android smartphone with AI features",
  },
  {
    id: 9,
    name: "Sony WH-1000XM5",
    category: "Electronics",
    price: 399,
    description: "Premium noise-canceling headphones",
  },
  {
    id: 10,
    name: "Patagonia Jacket",
    category: "Clothing",
    price: 150,
    description: "Weather-resistant outdoor jacket",
  },
  { id: 11, name: "Converse Chuck Taylor", category: "Shoes", price: 55, description: "Classic canvas sneakers" },
  { id: 12, name: "iPad Pro", category: "Electronics", price: 799, description: "Professional tablet with M2 chip" },
]

const categories = ["All", "Electronics", "Shoes", "Clothing"]

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState<"name" | "price" | "category">("name")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

  // Filter and sort items based on search criteria
  const filteredAndSortedItems = useMemo(() => {
    const filtered = items.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory

      return matchesSearch && matchesCategory
    })

    // Sort the filtered results
    filtered.sort((a, b) => {
      let aValue: string | number
      let bValue: string | number

      switch (sortBy) {
        case "price":
          aValue = a.price
          bValue = b.price
          break
        case "category":
          aValue = a.category
          bValue = b.category
          break
        default:
          aValue = a.name
          bValue = b.name
      }

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortOrder === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
      } else {
        return sortOrder === "asc" ? (aValue as number) - (bValue as number) : (bValue as number) - (aValue as number)
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, sortBy, sortOrder])

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Search & Filter</h1>
        <p className="text-gray-600">
          This page demonstrates real-time search and filtering functionality. Try searching for products or filtering
          by category.
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="card mb-8">
        <div className="grid md:grid-cols-4 gap-4">
          {/* Search Input */}
          <div className="md:col-span-2">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              Search Products
            </label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or description..."
              className="form-input"
            />
          </div>

          {/* Category Filter */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="form-input"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Options */}
          <div>
            <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-2">
              Sort By
            </label>
            <div className="flex space-x-2">
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "name" | "price" | "category")}
                className="form-input flex-1"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="category">Category</option>
              </select>
              <button
                onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
                title={`Sort ${sortOrder === "asc" ? "Descending" : "Ascending"}`}
              >
                {sortOrder === "asc" ? "↑" : "↓"}
              </button>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Showing {filteredAndSortedItems.length} of {items.length} products
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
        </div>
      </div>

      {/* Results */}
      {filteredAndSortedItems.length === 0 ? (
        <div className="card text-center">
          <p className="text-gray-500">No products found matching your criteria.</p>
          <p className="text-sm text-gray-400 mt-2">Try adjusting your search terms or filters.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedItems.map((item) => (
            <div key={item.id} className="card">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mt-1">
                    {item.category}
                  </span>
                </div>
                <span className="text-lg font-bold text-green-600">${item.price}</span>
              </div>

              <p className="text-gray-600 text-sm mb-4">{item.description}</p>

              <button className="btn-primary w-full">Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
