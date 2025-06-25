# anterlab-nextjs-test

# Next.js Evaluation Project

A complete Next.js project demonstrating 10 essential features of modern web development using the App Router.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🎯 Project Goal

This project is designed as a full evaluation of Next.js skills, covering key modern web development concepts — from static generation to authentication and state management.

## ✨ Implemented Features

### 1. 📝 Static Blog  
- Static pages generated with `generateStaticParams`  
- 3 blog posts with title, summary, and full content  
- SEO optimized metadata  

### 2. 🔗 Dynamic Routes  
- Dynamic pages for each post (`/blog/[slug]`)  
- Auto-generated routes based on data  
- 404 handling for missing slugs  

### 3. 📋 Form with Validation  
- Real-time client-side validation  
- Required fields: name, email, message  
- Email validation with regex  
- Contextual error messages  

### 4. 👥 Client-Side Data Fetch  
- `useEffect` for data fetching  
- JSONPlaceholder API for users  
- Loading states and error handling  
- Responsive UI with user cards  

### 5. 📄 Server-Side Data Fetch  
- Server Components for performance  
- Server fetch with caching and revalidation  
- Fast initial render without JS  
- Improved SEO  

### 6. 🔌 API Route  
- POST endpoint `/api/contact`  
- Server-side data validation  
- Logs messages to console  
- Proper HTTP error handling  

### 7. 🧭 Navigation with Link  
- Global layout with navbar  
- Optimized navigation with `next/link`  
- Visual active state indicators  
- Responsive design  

### 8. 🛒 Context API  
- Full shopping cart with Context + useReducer  
- Global shared state between components  
- Actions: add, remove, update quantity  
- Visual persistence with navbar count  

### 9. 🔍 Search & Filters  
- Real-time search on name and description  
- Category filters (Electronics, Shoes, Clothing)  
- Dynamic sorting by name, price, category  
- Intuitive UI with instant results  

### 10. 🔒 Protected Route  
- Fake but functional authentication system  
- Dashboard protection with redirect  
- Persistence with localStorage  
- Session management with Context API  

## 🛠️ Technologies Used

- **Next.js 15** — React framework with App Router  
- **React 18** — UI library with modern hooks  
- **TypeScript** — Static typing for better DX  
- **Tailwind CSS** — Utility-first CSS framework  
- **Context API** — React native state management  

## 🚀 Installation and Running

### Prerequisites  
- Node.js 18+  
- npm, yarn, or pnpm  

### Install

```bash
git clone https://github.com/USERNAME/nextjs-evaluation-project.git
cd nextjs-evaluation-project
npm install
# or
yarn install
# or
pnpm install
Run in Development
bash
Copier
Modifier
npm run dev
# or
yarn dev
# or
pnpm dev
Open http://localhost:3000 in your browser.

Build and Run Production
bash
Copier
Modifier
npm run build
npm run start
🎮 Usage Guide
Authentication
Login page: /login

Test credentials:

Username: admin

Password: password

Protected dashboard: /dashboard

Navigation
Home: project overview

Blog: posts with dynamic routing

Contact: form with validation

Users: client-side fetch

Posts: server-side fetch

Cart: state management with Context

Search: real-time filters

About: project documentation

📁 Project Structure
python
Copier
Modifier
app/
├── layout.tsx              # Main layout
├── page.tsx                # Home page
├── globals.css             # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   └── ...
├── context/
│   ├── CartContext.tsx     # Cart context
│   ├── AuthContext.tsx     # Auth context
│   └── ...
├── blog/
│   ├── page.tsx            # Blog list
│   └── [slug]/
│       └── page.tsx        # Individual post
├── api/
│   └── contact/
│       └── route.ts        # API endpoint
└── [other-pages]/
    └── page.tsx
🎯 Key Learning Points
App Router vs Pages Router

Server Components by default

Nested and shared layouts

Automatic loading and error boundaries

Streaming and progressive rendering

Modern React patterns

Custom hooks

Context + useReducer for complex state

Component composition

TypeScript safety

Performance & SEO

Static generation for content pages

Server Components reduce JS bundle

Image optimization with next/image

Proper SEO metadata

🐛 Troubleshooting
Module not found

bash
Copier
Modifier
rm -rf node_modules package-lock.json
npm install
TypeScript errors

bash
Copier
Modifier
npm run dev  # regenerates Next.js types
Tailwind styles not applied

bash
Copier
Modifier
npx tailwindcss init -p
Debug tips: check browser console, server logs, use React DevTools.

🤝 Contributing
Contributions are welcome!

Fork the repo

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add AmazingFeature')

Push branch (git push origin feature/AmazingFeature)

Open a Pull Request

📝 License
This project is licensed under the MIT License. See LICENSE for details.
## 📸 Screenshot

Here is a screenshot showing the main page layout of the project:

## 📸 Screenshot

Here is a screenshot showing the main page layout of the project:

![Main Page Screenshot](https://raw.githubusercontent.com/Trikisalem/anterlab-nextjs-test/da396cbe095105b2faa94f1b5f03b29401088315/1.png)
## 📸 Screenshot

Here is a screenshot showing the main page layout of the project:

## 📸 Screenshot

Here is a screenshot showing the main page layout of the project:

![Main Page Screenshot](https://raw.githubusercontent.com/Trikisalem/anterlab-nextjs-test/main/1.png)
## 📸 Screenshot

Here is a screenshot showing the main page layout of the project:

## 📸 Screenshot

Here is a screenshot showing the main page layout of the project:

![Main Page Screenshot](https://raw.githubusercontent.com/Trikisalem/anterlab-nextjs-test/main/1.png)




