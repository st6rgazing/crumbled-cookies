"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProductCard } from "@/components/product-card"
import { products, categories } from "@/lib/data"

export default function Home() {
  // Filter products by type
  const regularProducts = products.filter((p) => p.type !== "bundle")
  const bundleProducts = products.filter((p) => p.type === "bundle")

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      {/* Cute background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-pink-200 to-rose-300 opacity-30 blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-10 w-80 h-80 rounded-full bg-gradient-to-br from-rose-200 to-pink-400 opacity-25 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full bg-gradient-to-br from-pink-300 to-rose-200 opacity-20 blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Floating cookie crumbs */}
        <div
          className="absolute top-20 left-1/4 w-3 h-3 rounded-full bg-pink-400 opacity-40 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-40 right-1/3 w-2 h-2 rounded-full bg-rose-400 opacity-50 animate-bounce"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/5 w-4 h-4 rounded-full bg-pink-300 opacity-30 animate-bounce"
          style={{ animationDelay: "2.5s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 py-20">
        <div className="container relative z-10 flex flex-col items-center gap-10 text-center">
          <div className="space-y-6">
            <Badge className="bg-gradient-to-r from-pink-200 to-rose-200 text-pink-800 hover:from-pink-300 hover:to-rose-300 animate-pulse border-2 border-pink-300 px-6 py-2 text-base font-semibold rounded-full">
              ✨ Fresh Daily ✨
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 md:text-7xl leading-tight">
              Handcrafted Cookies <br /> Made Fresh Daily
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-pink-700 leading-relaxed">
              Premium ingredients, traditional recipes, and a passion for perfection in every bite.
            </p>
          </div>
          <div className="flex flex-wrap gap-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-full px-10 py-6 text-lg font-semibold shadow-xl transform hover:scale-105 transition-all"
              asChild
            >
              <Link href="/shop/best-sellers">🍪 Shop Best Sellers</Link>
            </Button>
          </div>
        </div>

        {/* Enhanced decorative elements */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-pink-300 to-rose-400 opacity-40 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-rose-300 to-pink-400 opacity-40 blur-3xl"></div>

        {/* Cookie decorations with gradients */}
        <div className="absolute top-16 left-16 opacity-30 rotate-12 animate-bounce" style={{ animationDelay: "0.5s" }}>
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 shadow-lg"></div>
        </div>
        <div
          className="absolute bottom-16 right-16 opacity-30 -rotate-12 animate-bounce"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 shadow-lg"></div>
        </div>
        <div
          className="absolute top-1/2 right-1/4 opacity-20 rotate-45 animate-bounce"
          style={{ animationDelay: "2.5s" }}
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-300 to-rose-400 shadow-lg"></div>
        </div>
      </section>

      {/* Mini Cookie Bundles */}
      {bundleProducts.length > 0 && (
        <section className="py-16">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 mb-4">
                Mini Cookie Bundles
              </h2>
              <p className="text-xl text-pink-700">Create your perfect mix of bite-sized treats</p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {bundleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Products */}
      <section className="py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 mb-4">
              Best Sellers
            </h2>
            <p className="text-xl text-pink-700">Our most popular cookies that customers love</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {regularProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-full px-8 py-6 text-lg font-semibold shadow-xl transform hover:scale-105 transition-all"
              asChild
            >
              <Link href="/shop/best-sellers">View All Best Sellers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-pink-700">Find your perfect cookie match</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/shop/category/${category.slug}`}
                className="group relative overflow-hidden rounded-3xl shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 via-pink-900/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-pink-100 text-lg">{category.count} products</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 mb-4">
              New Arrivals
            </h2>
            <p className="text-xl text-pink-700">Fresh from our ovens</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {regularProducts.slice(4, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-full px-8 py-6 text-lg font-semibold shadow-xl transform hover:scale-105 transition-all"
              asChild
            >
              <Link href="/shop/new-arrivals">See All New Arrivals</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
