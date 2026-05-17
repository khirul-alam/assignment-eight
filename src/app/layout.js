import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import { Toaster } from "react-hot-toast"; 


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mango Library | Online Book Borrowing Platform",
  description: "A seamless and modern web application to digitize the library experience.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light" 
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="flex flex-col min-h-screen">        
        <Toaster position="top-right" reverseOrder={false} />        
        <Navbar />        
        <main className="flex-grow">
          {children}
        </main>        
        <Footer />
      </body>
    </html>
  );
}