"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingBagIcon, HeartIcon, MenuIcon, XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { useWishlist } from "@/components/wishlist-provider"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cart } = useCart()
  const { wishlist } = useWishlist()

  const getTotalItems = () => {
    return cart.reduce((total, item) => {
      if (item.isBundle) {
        return total + 1
      }
      return total + item.quantity
    }, 0)
  }

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Best Sellers", href: "/shop/best-sellers" },
    { name: "New Arrivals", href: "/shop/new-arrivals" },
    { name: "Gift Sets", href: "/shop/gift-sets" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-pink-200 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative transition-transform group-hover:scale-110">
              <Image src="/logo-no-bg.png" alt="Crumbled Logo" width={120} height={60} className="h-12 w-auto" />
            </div>
          </Link>
          <nav className="hidden lg:flex gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-semibold text-pink-600 hover:text-pink-800 transition-all relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-5">
          <Link href="/favorites" className="text-pink-600 hover:text-pink-800 transition-all hover:scale-125 relative">
            <HeartIcon className="h-6 w-6" />
            <span className="sr-only">Favorites</span>
            {wishlist.length > 0 && (
              <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-xs font-bold text-white animate-pulse">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link href="/cart" className="text-pink-600 hover:text-pink-800 transition-all hover:scale-125 relative">
            <ShoppingBagIcon className="h-6 w-6" />
            <span className="sr-only">Cart</span>
            {getTotalItems() > 0 && (
              <span className="absolute -right-3 -top-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-xs font-bold text-white animate-pulse shadow-lg">
                {getTotalItems()}
              </span>
            )}
          </Link>

          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              variant="outline"
              className="border-2 border-pink-300 text-pink-600 hover:bg-gradient-to-r hover:from-pink-100 hover:to-rose-100 rounded-full px-6"
              asChild
            >
              <Link href="/auth/login">Log in</Link>
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-full px-6 shadow-lg"
              asChild
            >
              <Link href="/auth/signup">Sign up</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-pink-600 hover:text-pink-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-pink-200 bg-white/95 backdrop-blur-md">
          <div className="container py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-semibold text-pink-600 hover:text-pink-800 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-pink-200">
              <Button
                variant="outline"
                className="border-2 border-pink-300 text-pink-600 hover:bg-gradient-to-r hover:from-pink-100 hover:to-rose-100 rounded-full"
                asChild
              >
                <Link href="/auth/login">Log in</Link>
              </Button>
              <Button
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-full shadow-lg"
                asChild
              >
                <Link href="/auth/signup">Sign up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
