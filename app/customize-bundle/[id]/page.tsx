"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus, Minus, ShoppingCart } from "lucide-react"
import { products, miniCookies } from "@/lib/data"
import { useCart } from "@/components/cart-provider"

interface SelectedCookie {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export default function CustomizeBundlePage() {
  const params = useParams()
  const router = useRouter()
  const bundleId = Number.parseInt(params.id as string)
  const bundle = products.find((p) => p.id === bundleId && p.type === "bundle")
  const { addToCart } = useCart()

  const [selectedCookies, setSelectedCookies] = useState<SelectedCookie[]>([])

  if (!bundle) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
        <div className="container py-16 text-center">
          <h1 className="text-3xl font-bold text-pink-800">Bundle not found</h1>
          <Button className="mt-4" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    )
  }

  const totalSelected = selectedCookies.reduce((sum, cookie) => sum + cookie.quantity, 0)
  const totalPrice = selectedCookies.reduce((sum, cookie) => sum + cookie.price * cookie.quantity, 0)
  const remainingSlots = bundle.bundleSize - totalSelected

  const updateCookieQuantity = (cookieId: number, newQuantity: number) => {
    if (newQuantity < 0) return

    setSelectedCookies((prev) => {
      const existing = prev.find((c) => c.id === cookieId)
      const cookie = miniCookies.find((c) => c.id === cookieId)

      if (!cookie) return prev

      if (newQuantity === 0) {
        return prev.filter((c) => c.id !== cookieId)
      }

      if (existing) {
        return prev.map((c) => (c.id === cookieId ? { ...c, quantity: newQuantity } : c))
      } else {
        return [
          ...prev,
          {
            id: cookie.id,
            name: cookie.name,
            price: cookie.price,
            quantity: newQuantity,
            image: cookie.image,
          },
        ]
      }
    })
  }

  const getCookieQuantity = (cookieId: number) => {
    return selectedCookies.find((c) => c.id === cookieId)?.quantity || 0
  }

  const canAddMore = (cookieId: number) => {
    const currentQuantity = getCookieQuantity(cookieId)
    return totalSelected < bundle.bundleSize
  }

  const handleAddToCart = () => {
    if (totalSelected !== bundle.bundleSize) return

    const customBundle = {
      id: Date.now(), // Generate unique ID for custom bundle
      name: `Custom ${bundle.name}`,
      price: totalPrice,
      quantity: 1,
      image: bundle.image,
      isBundle: true,
      bundleSize: bundle.bundleSize,
      bundleItems: selectedCookies.map((cookie) => ({
        id: cookie.id,
        name: cookie.name,
        price: cookie.price,
        quantity: cookie.quantity,
        image: cookie.image,
      })),
    }

    addToCart(customBundle)
    router.push("/cart")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <div className="container py-8">
        <div className="mb-8">
          <Button variant="ghost" className="text-pink-600 hover:text-pink-800" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-pink-800 mb-2">Customize Your {bundle.name}</h1>
              <p className="text-lg text-pink-600">{bundle.description}</p>
            </div>

            <Card className="border-2 border-pink-200 rounded-3xl mb-8">
              <CardHeader>
                <CardTitle className="text-pink-800">Select Your Cookies</CardTitle>
                <div className="flex items-center gap-4">
                  <Badge
                    className={`${
                      totalSelected === bundle.bundleSize
                        ? "bg-green-100 text-green-800 border-green-200"
                        : totalSelected > bundle.bundleSize
                          ? "bg-red-100 text-red-800 border-red-200"
                          : "bg-pink-100 text-pink-800 border-pink-200"
                    }`}
                  >
                    {totalSelected} / {bundle.bundleSize} cookies selected
                  </Badge>
                  {remainingSlots > 0 && (
                    <span className="text-sm text-pink-600">Choose {remainingSlots} more cookies</span>
                  )}
                  {totalSelected > bundle.bundleSize && (
                    <span className="text-sm text-red-600">Remove {totalSelected - bundle.bundleSize} cookies</span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {miniCookies.map((cookie) => {
                    const quantity = getCookieQuantity(cookie.id)
                    return (
                      <div
                        key={cookie.id}
                        className="flex items-center gap-4 p-4 bg-white rounded-2xl border-2 border-pink-100"
                      >
                        <div className="w-20 h-20 overflow-hidden rounded-xl">
                          <img
                            src={cookie.image || "/placeholder.svg"}
                            alt={cookie.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-pink-800">{cookie.name}</h3>
                          <p className="text-sm text-pink-600">{cookie.description}</p>
                          <p className="text-lg font-bold text-pink-700">${cookie.price.toFixed(2)} each</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-10 w-10 border-2 border-pink-300 text-pink-600 hover:bg-pink-100 rounded-full"
                            onClick={() => updateCookieQuantity(cookie.id, quantity - 1)}
                            disabled={quantity === 0}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center text-xl font-bold text-pink-800">{quantity}</span>
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-10 w-10 border-2 border-pink-300 text-pink-600 hover:bg-pink-100 rounded-full"
                            onClick={() => updateCookieQuantity(cookie.id, quantity + 1)}
                            disabled={!canAddMore(cookie.id)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-2 border-pink-200 rounded-3xl sticky top-8">
              <CardHeader>
                <CardTitle className="text-pink-800">Bundle Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-pink-700">Bundle Size:</span>
                    <span className="font-bold text-pink-800">{bundle.bundleSize} cookies</span>
                  </div>

                  {selectedCookies.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-pink-800">Selected Cookies:</h4>
                      {selectedCookies.map((cookie) => (
                        <div key={cookie.id} className="flex justify-between items-center text-sm">
                          <span className="text-pink-700">
                            {cookie.quantity}x {cookie.name}
                          </span>
                          <span className="font-bold text-pink-800">
                            ${(cookie.price * cookie.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="border-t border-pink-200 pt-4">
                    <div className="flex justify-between items-center text-xl">
                      <span className="font-bold text-pink-800">Total:</span>
                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <Button
                    onClick={handleAddToCart}
                    disabled={totalSelected !== bundle.bundleSize}
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-full py-6 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>

                  {totalSelected !== bundle.bundleSize && (
                    <p className="text-sm text-pink-600 text-center">
                      {totalSelected < bundle.bundleSize
                        ? `Select ${bundle.bundleSize - totalSelected} more cookies to continue`
                        : `Remove ${totalSelected - bundle.bundleSize} cookies to continue`}
                    </p>
                  )}

                  <div className="mt-4 p-3 bg-pink-50 rounded-xl border border-pink-200">
                    <p className="text-xs text-pink-700 text-center">
                      💡 <strong>Transparent Pricing:</strong> Your bundle price is the exact sum of your selected
                      cookies - no hidden fees!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
