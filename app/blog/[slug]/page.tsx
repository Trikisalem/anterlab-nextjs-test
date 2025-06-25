//"use client"

import { ClientBlogPostPage } from "./ClientBlogPostPage"

// Static blog data - same as in the blog index
const blogPosts = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    summary: "Learn the basics of Next.js and how to build modern React applications with server-side rendering.",
    content: `
      Next.js is a powerful React framework that enables you to build full-stack web applications. 
      It provides many features out of the box, including:

      ## Key Features

      - **Server-Side Rendering (SSR)**: Pages are rendered on the server, improving SEO and initial load times.
      - **Static Site Generation (SSG)**: Pre-render pages at build time for maximum performance.
      - **API Routes**: Build your backend API alongside your frontend code.
      - **File-based Routing**: Create routes by adding files to the pages directory.
      - **Built-in CSS Support**: Import CSS files directly into your components.

      ## Getting Started

      To create a new Next.js project, run:

      \`\`\`bash
      npx create-next-app@latest my-app
      cd my-app
      npm run dev
      \`\`\`

      This will create a new Next.js application and start the development server.

      ## Conclusion

      Next.js makes it easy to build modern React applications with great performance and developer experience.
    `,
    date: "2024-01-15",
    author: "John Doe",
  },
  {
    slug: "understanding-react-hooks",
    title: "Understanding React Hooks",
    summary: "A comprehensive guide to React Hooks and how they can simplify your component logic.",
    content: `
      React Hooks revolutionized how we write React components by allowing us to use state and other React features in functional components.

      ## What are Hooks?

      Hooks are functions that let you "hook into" React state and lifecycle features from function components. They don't work inside classes.

      ## Common Hooks

      ### useState
      The useState Hook lets you add state to functional components:

      \`\`\`javascript
      const [count, setCount] = useState(0);
      \`\`\`

      ### useEffect
      The useEffect Hook lets you perform side effects in function components:

      \`\`\`javascript
      useEffect(() => {
        document.title = \`Count: \${count}\`;
      }, [count]);
      \`\`\`

      ### useContext
      The useContext Hook lets you consume context in functional components:

      \`\`\`javascript
      const theme = useContext(ThemeContext);
      \`\`\`

      ## Rules of Hooks

      1. Only call Hooks at the top level of your React function
      2. Only call Hooks from React function components or custom Hooks

      ## Conclusion

      Hooks provide a more direct API to the React concepts you already know and make your code more reusable and easier to understand.
    `,
    date: "2024-01-10",
    author: "Jane Smith",
  },
  {
    slug: "tailwind-css-best-practices",
    title: "Tailwind CSS Best Practices",
    summary: "Tips and tricks for writing maintainable and scalable CSS with Tailwind CSS framework.",
    content: `
      Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup.

      ## Why Tailwind CSS?

      - **Utility-First**: Build complex components from a constrained set of primitive utilities
      - **Responsive**: Every utility class can be applied conditionally at different breakpoints
      - **Customizable**: Tailwind is designed to be customized and extended
      - **Performance**: Automatically removes unused CSS in production builds

      ## Best Practices

      ### 1. Use Component Classes for Repeated Patterns

      Instead of repeating the same utility classes, create component classes:

      \`\`\`css
      @layer components {
        .btn-primary {
          @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
        }
      }
      \`\`\`

      ### 2. Organize Your Utilities

      Group related utilities together for better readability:

      \`\`\`html
      <div class="
        flex items-center justify-center
        w-full h-64
        bg-gray-100 rounded-lg
        text-gray-800 font-semibold
      ">
        Content
      </div>
      \`\`\`

      ### 3. Use Responsive Design

      Tailwind makes responsive design easy with breakpoint prefixes:

      \`\`\`html
      <div class="text-sm md:text-base lg:text-lg xl:text-xl">
        Responsive text
      </div>
      \`\`\`

      ## Conclusion

      Tailwind CSS can significantly speed up your development process while maintaining design consistency across your application.
    `,
    date: "2024-01-05",
    author: "Mike Johnson",
  },
]

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage() {
  return <ClientBlogPostPage blogPosts={blogPosts} />
}
