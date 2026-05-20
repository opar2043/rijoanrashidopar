# Rijoan Rashid Opar - Professional Portfolio

A premium, full-stack portfolio application built with **Next.js 15**, **Tailwind CSS 4**, and **Framer Motion**. This project features a stunning dark-themed interface, dynamic project filtering, and a robust admin dashboard for content management.

## 🚀 Live Demo
[rijoanrashidopar.vercel.app](https://rijoanrashidopar.vercel.app)

## ✨ Key Features

### 🌐 Public Experience
- **Stunning Design**: Premium aesthetics using smooth gradients, glassmorphism, and a curated dark color palette.
- **Dynamic Project Gallery**: Filter projects by tech stack (React, Next.js, Prisma, etc.) and view them sorted by complexity.
- **Case Studies**: Detailed project pages with overviews, tech stacks, and direct links to GitHub or Live Demos.
- **Service Showcases**: Interactive display of professional services and technical ecosystems.
- **Responsive Navigation**: Smooth, mobile-optimized navigation with scroll-aware background transitions.
- **Contact Integration**: Fully functional contact form integrated with external email services.

### 🔐 Admin & Authentication
- **Full-Stack Auth**: Secure authentication powered by **Firebase** (Email/Password & Google Login).
- **Role-Based Access**: Specialized **Admin Dashboard** restricted to specific user roles via security guards.
- **Project Management**: Complete CRUD operations (Create, Read, Update, Delete) for portfolio projects.
- **Content Organization**: Automated "Private Repository" handling and intelligent project sorting.
- **Personalized Experience**: User-specific data syncing between Firebase and a custom backend.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router, Server Components)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Authentication**: [Firebase Auth](https://firebase.google.com/docs/auth)
- **State Management**: React Context API
- **Icons**: Lucide React & React Icons
- **Notifications**: [Sonner](https://sonner.stevenlyui.com/)
- **Form Handling**: Web3Forms Integration
- **HTTP Client**: Axios

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/opar2043/rijoanrashidopar.git
   cd rijoanrashidopar
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Create a `.env.local` file in the root directory and add the following keys (example structure):
   ```env
   # Firebase Config
   NEXT_PUBLIC_FIREBASE_API_KEY=your_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   # Backend API
   NEXT_PUBLIC_API_URL=your_backend_url

   # Forms
   NEXT_PUBLIC_WEB_FORM=your_web3forms_key
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```bash
src/
├── actions/      # Next.js Server Actions
├── app/          # Next.js App Router (Layouts, Pages, Groups)
├── components/   # Reusable UI Components
│   ├── Auth/     # Login, Register, Auth Guards
│   ├── Dashboard/# Admin-only components
│   ├── Layout/   # Section components (Hero, About, etc.)
│   └── Public/   # Shared public components (Cards, Gallery)
├── lib/          # Utilities and configurations
├── service/      # API services and axios configuration
└── styles/       # Global CSS and theme configuration
```

## 📄 License
This project is for personal portfolio representation. All rights reserved by **Rijoan Rashid Opar**.

---

Built with ❤️ by [Rijoan Rashid Opar](https://github.com/opar2043)
