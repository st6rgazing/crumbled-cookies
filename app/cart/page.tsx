"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { Badge } from "@/components/ui/badge"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart()
  const [promoCode, setPromoCode] = useState("")
  const [discount, setDiscount] = useState(0)

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "save10") {
      setDiscount(0.1)
    } else if (promoCode.toLowerCase() === "welcome") {
      setDiscount(0.15)
    } else {
      setDiscount(0)
    }
  }

  const subtotal = getTotalPrice()
  const discountAmount = subtotal * discount
  const shipping = subtotal > 50 ? 0 : 4.99
  const tax = (subtotal - discountAmount) * 0.08
  const total = subtotal - discountAmount + shipping + tax

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
        <div className="container py-16">
          <div className="text-center">
            <div className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-pink-200 to-rose-200">
              <ShoppingBag className="h-16 w-16 text-pink-600" />
            </div>
            <h1 className="mb-4 text-3xl font-bold text-pink-800">Your cart is empty</h1>
            <p className="mb-8 text-lg text-pink-600">Add some delicious cookies to get started!</p>
            <Button
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-full px-8 py-3"
              asChild
            >
              <Link href="/">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <div className="container py-8">
        <div className="mb-8 flex items-center gap-4">
          <Button variant="ghost" className="text-pink-600 hover:text-pink-800" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Continue Shopping
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-pink-800">Shopping Cart</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="border-2 border-pink-200 rounded-3xl">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 rounded-2xl border-2 border-pink-100 bg-white p-4"
                    >
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-pink-800">{item.name}</h3>
                        <p className="text-pink-600">
                          ${item.price.toFixed(2)} {!item.isBundle && "each"}
                        </p>
                        {item.isBundle && (
                          <div className="mt-2">
                            <p className="text-sm text-pink-500">Bundle of {item.bundleSize} cookies</p>
                            {item.bundleItems && item.bundleItems.length > 0 && (
                              <div className="mt-1 flex flex-wrap gap-1">
                                {item.bundleItems.map((bundleItem, index) => (
                                  <Badge key={index} variant="outline" className="bg-pink-50 text-xs">
                                    {bundleItem.name}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      {!item.isBundle && (
                        <div className="flex items-center gap-3">
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8 border-pink-300 text-pink-600 hover:bg-pink-100"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center font-bold text-pink-800">{item.quantity}</span>
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8 border-pink-300 text-pink-600 hover:bg-pink-100"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                      <div className="text-right">
                        <p className="font-bold text-lg text-pink-800">
                          ${(item.price * (item.isBundle ? 1 : item.quantity)).toFixed(2)}
                        </p>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-pink-500 hover:text-pink-700"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex justify-between">
                  <Button variant="outline" onClick={clearCart} className="border-pink-300 text-pink-600">
                    Clear Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-2 border-pink-200 rounded-3xl">
              <CardContent className="p-6">
                <h3 className="mb-4 font-bold text-lg text-pink-800">Promo Code</h3>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="border-pink-200"
                  />
                  <Button
                    onClick={applyPromoCode}
                    className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
                  >
                    Apply
                  </Button>
                </div>
                {discount > 0 && (
                  <p className="mt-2 text-sm text-green-600">Promo code applied! {discount * 100}% off</p>
                )}
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200 rounded-3xl">
              <CardContent className="p-6">
                <h3 className="mb-4 font-bold text-lg text-pink-800">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-pink-700">Subtotal</span>
                    <span className="font-bold text-pink-800">${subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-pink-700">Shipping</span>
                    <span className="font-bold text-pink-800">
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-pink-700">Tax</span>
                    <span className="font-bold text-pink-800">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-pink-200 pt-3">
                    <div className="flex justify-between text-xl">
                      <span className="font-bold text-pink-800">Total</span>
                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <Button
                  className="mt-6 w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-full py-6 text-lg font-bold"
                  asChild
                >
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
