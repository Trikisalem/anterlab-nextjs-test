"use client"

import { useCart } from "../context/CartContext"

// Sample products for demonstration
const sampleProducts = [
  { id: 1, name: "Wireless Headphones", price: 99.99 },
  { id: 2, name: "Smartphone Case", price: 24.99 },
  { id: 3, name: "Bluetooth Speaker", price: 79.99 },
  { id: 4, name: "USB Cable", price: 12.99 },
  { id: 5, name: "Power Bank", price: 39.99 },
]

export default function CartPage() {
  const { items, addItem, removeItem, updateQuantity, clearCart, getTotalPrice } = useCart()

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Shopping Cart</h1>
        <p className="text-gray-600">
          This page demonstrates the Context API for state management. The cart state is shared across the entire
          application.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Products Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Products</h2>
          <div className="space-y-4">
            {sampleProducts.map((product) => (
              <div key={product.id} className="card">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-900">{product.name}</h3>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  </div>
                  <button onClick={() => addItem(product)} className="btn-primary">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Your Cart</h2>
            {items.length > 0 && (
              <button onClick={clearCart} className="text-red-600 hover:text-red-800 text-sm">
                Clear Cart
              </button>
            )}
          </div>

          {items.length === 0 ? (
            <div className="card text-center">
              <p className="text-gray-500">Your cart is empty</p>
              <p className="text-sm text-gray-400 mt-2">Add some products to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="card">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)} each</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>

                      <span className="w-8 text-center">{item.quantity}</span>

                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded"
                      >
                        +
                      </button>

                      <button onClick={() => removeItem(item.id)} className="ml-2 text-red-600 hover:text-red-800">
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="mt-2 pt-2 border-t border-gray-200">
                    <p className="text-right font-medium">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}

              <div className="card bg-gray-50">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total:</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <button className="btn-primary w-full mt-4">Proceed to Checkout</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
