import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import AuthProvider from "./(AuthCompo)/AuthProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rijoan Rashid Opar",
  icons: {
    icon: "https://i.ibb.co.com/d04tyjNw/opar-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col antialiased relative overflow-x-hidden" suppressHydrationWarning>
        {/* Ambient Background Blobs */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] left-[20%] w-[35%] h-[35%] bg-primary/5 rounded-full blur-[120px]" />
        </div>

        <main className="flex-1">
          <AuthProvider>
            <Toaster position="top-center" richColors />
            {children}
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
