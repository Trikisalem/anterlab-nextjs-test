export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">About This Project</h1>
        <p className="text-xl text-gray-600">
          A comprehensive Next.js application demonstrating modern web development practices
        </p>
      </div>

      <div className="space-y-8">
        <div className="card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Project Overview</h2>
          <p className="text-gray-700 mb-4">
            This Next.js application showcases 10 essential web development concepts and features, built using the App
            Router architecture. It demonstrates both client-side and server-side functionality, state management,
            routing, and modern React patterns.
          </p>
          <p className="text-gray-700">
            The project is designed as a comprehensive evaluation tool for Next.js proficiency, covering everything from
            basic routing to advanced concepts like server components and authentication.
          </p>
        </div>

        <div className="card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Features Implemented</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded mr-3 mt-0.5">
                  1
                </span>
                <div>
                  <h3 className="font-medium">Static Blog Page</h3>
                  <p className="text-sm text-gray-600">Static generation with generateStaticParams</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded mr-3 mt-0.5">
                  2
                </span>
                <div>
                  <h3 className="font-medium">Dynamic Routes</h3>
                  <p className="text-sm text-gray-600">Dynamic blog post pages with [slug] routing</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded mr-3 mt-0.5">
                  3
                </span>
                <div>
                  <h3 className="font-medium">Form Validation</h3>
                  <p className="text-sm text-gray-600">Contact form with client-side validation</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded mr-3 mt-0.5">
                  4
                </span>
                <div>
                  <h3 className="font-medium">Client-side Fetching</h3>
                  <p className="text-sm text-gray-600">useEffect with JSONPlaceholder API</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded mr-3 mt-0.5">
                  5
                </span>
                <div>
                  <h3 className="font-medium">Server-side Fetching</h3>
                  <p className="text-sm text-gray-600">Server Components with data fetching</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-3 mt-0.5">
                  6
                </span>
                <div>
                  <h3 className="font-medium">API Routes</h3>
                  <p className="text-sm text-gray-600">POST endpoint for contact form</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-3 mt-0.5">
                  7
                </span>
                <div>
                  <h3 className="font-medium">Navigation</h3>
                  <p className="text-sm text-gray-600">Layout with navbar using next/link</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-3 mt-0.5">
                  8
                </span>
                <div>
                  <h3 className="font-medium">Context API</h3>
                  <p className="text-sm text-gray-600">Shopping cart state management</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-3 mt-0.5">
                  9
                </span>
                <div>
                  <h3 className="font-medium">Search & Filter</h3>
                  <p className="text-sm text-gray-600">Real-time search with multiple filters</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-3 mt-0.5">
                  10
                </span>
                <div>
                  <h3 className="font-medium">Protected Routes</h3>
                  <p className="text-sm text-gray-600">Authentication with localStorage</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Frontend</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Next.js 15 (App Router)</li>
                <li>• React 18</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">State Management</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• React Context API</li>
                <li>• useReducer Hook</li>
                <li>• localStorage</li>
                <li>• Server State</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">Features</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Server Components</li>
                <li>• Client Components</li>
                <li>• API Routes</li>
                <li>• Dynamic Routing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Learning Points</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900">App Router vs Pages Router</h3>
              <p className="text-sm text-gray-600">
                This project uses the modern App Router, demonstrating the latest Next.js patterns including Server
                Components, improved layouts, and streamlined data fetching.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900">Server vs Client Components</h3>
              <p className="text-sm text-gray-600">
                Strategic use of Server Components for data fetching and SEO, while Client Components handle
                interactivity and browser-specific features.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900">State Management Patterns</h3>
              <p className="text-sm text-gray-600">
                Demonstrates various state management approaches from simple useState to Context API with useReducer for
                complex state logic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
