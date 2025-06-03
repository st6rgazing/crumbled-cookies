"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HeartIcon, ShoppingBag } from "lucide-react"
import { useWishlist } from "@/components/wishlist-provider"
import { useCart } from "@/components/cart-provider"

export default function FavoritesPage() {
  const { wishlist, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    })
  }

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
        <div className="container py-16">
          <div className="text-center">
            <div className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-pink-200 to-rose-200">
              <HeartIcon className="h-16 w-16 text-pink-600" />
            </div>
            <h1 className="mb-4 text-3xl font-bold text-pink-800">Your favorites list is empty</h1>
            <p className="mb-8 text-lg text-pink-600">Save your favorite cookies to easily find them later!</p>
            <Button
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-full px-8 py-3"
              asChild
            >
              <Link href="/">Browse Products</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-pink-800 mb-2">My Favorites</h1>
          <p className="text-pink-600">
            {wishlist.length} item{wishlist.length !== 1 ? "s" : ""} saved
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden border-2 border-pink-200 transition-all hover:shadow-xl rounded-3xl group bg-gradient-to-br from-white to-pink-50"
            >
              <div className="relative">
                <Link href={`/product/${product.id}`}>
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                </Link>
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all hover:scale-110"
                >
                  <HeartIcon className="h-5 w-5 fill-pink-500 text-pink-500" />
                </button>
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Link href={`/product/${product.id}`}>
                    <h3 className="font-bold text-lg text-pink-800 hover:text-pink-600 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-pink-600 mt-2">{product.description}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.inStock ? (
                    <Button
                      onClick={() => handleAddToCart(product)}
                      size="sm"
                      className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-full"
                    >
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  ) : (
                    <Button size="sm" disabled className="rounded-full">
                      Out of Stock
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
