import type React from "react"
import type { Metadata } from "next"
import { Quicksand } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WishlistProvider } from "@/components/wishlist-provider"
import { CartProvider } from "@/components/cart-provider"

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Crumbled - Delicious Handcrafted Cookies",
  description: "Handcrafted cookies made with premium ingredients and lots of love.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${quicksand.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <WishlistProvider>
            <CartProvider>
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </CartProvider>
          </WishlistProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
