"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Truck, Shield, ArrowLeft } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import Link from "next/link"

export default function CheckoutPage() {
  const router = useRouter()
  const { cart, getTotalPrice, clearCart } = useCart()
  const [step, setStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)

  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
  })

  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
  })

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  })

  const [sameAsShipping, setSameAsShipping] = useState(true)
  const [paymentMethod, setPaymentMethod] = useState("card")

  const subtotal = getTotalPrice()
  const shipping = subtotal > 50 ? 0 : 4.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Mock payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Clear cart and redirect to success page
    clearCart()
    router.push("/checkout/success")
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
        <div className="container py-16">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold text-pink-800">Your cart is empty</h1>
            <p className="mb-8 text-lg text-pink-600">Add some items to proceed with checkout</p>
            <Button
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-full"
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
            <Link href="/cart">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Cart
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-pink-800">Checkout</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* Progress Steps */}
            <div className="mb-8 flex items-center justify-center">
              <div className="flex items-center space-x-4">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 1 ? "bg-pink-500 text-white" : "bg-pink-200 text-pink-600"}`}
                >
                  1
                </div>
                <div className={`h-1 w-16 ${step >= 2 ? "bg-pink-500" : "bg-pink-200"}`}></div>
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 2 ? "bg-pink-500 text-white" : "bg-pink-200 text-pink-600"}`}
                >
                  2
                </div>
              </div>
            </div>

            {step === 1 && (
              <Card className="border-2 border-pink-200 rounded-3xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-pink-800">
                    <Truck className="h-5 w-5" />
                    Shipping Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleShippingSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-pink-700">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          required
                          value={shippingInfo.firstName}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, firstName: e.target.value })}
                          className="border-pink-200"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-pink-700">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          required
                          value={shippingInfo.lastName}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, lastName: e.target.value })}
                          className="border-pink-200"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-pink-700">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={shippingInfo.email}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                        className="border-pink-200"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-pink-700">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={shippingInfo.phone}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                        className="border-pink-200"
                      />
                    </div>
                    <div>
                      <Label htmlFor="address" className="text-pink-700">
                        Address
                      </Label>
                      <Input
                        id="address"
                        required
                        value={shippingInfo.address}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                        className="border-pink-200"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <Label htmlFor="city" className="text-pink-700">
                          City
                        </Label>
                        <Input
                          id="city"
                          required
                          value={shippingInfo.city}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                          className="border-pink-200"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state" className="text-pink-700">
                          State
                        </Label>
                        <Input
                          id="state"
                          required
                          value={shippingInfo.state}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                          className="border-pink-200"
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode" className="text-pink-700">
                          ZIP Code
                        </Label>
                        <Input
                          id="zipCode"
                          required
                          value={shippingInfo.zipCode}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, zipCode: e.target.value })}
                          className="border-pink-200"
                        />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-full py-6"
                    >
                      Continue to Payment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <Card className="border-2 border-pink-200 rounded-3xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-pink-800">
                      <CreditCard className="h-5 w-5" />
                      Payment Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card">Credit/Debit Card</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal">PayPal</Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>

                {paymentMethod === "card" && (
                  <Card className="border-2 border-pink-200 rounded-3xl">
                    <CardHeader>
                      <CardTitle className="text-pink-800">Card Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handlePaymentSubmit} className="space-y-6">
                        <div>
                          <Label htmlFor="nameOnCard" className="text-pink-700">
                            Name on Card
                          </Label>
                          <Input
                            id="nameOnCard"
                            required
                            value={paymentInfo.nameOnCard}
                            onChange={(e) => setPaymentInfo({ ...paymentInfo, nameOnCard: e.target.value })}
                            className="border-pink-200"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cardNumber" className="text-pink-700">
                            Card Number
                          </Label>
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            required
                            value={paymentInfo.cardNumber}
                            onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
                            className="border-pink-200"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="expiryDate" className="text-pink-700">
                              Expiry Date
                            </Label>
                            <Input
                              id="expiryDate"
                              placeholder="MM/YY"
                              required
                              value={paymentInfo.expiryDate}
                              onChange={(e) => setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })}
                              className="border-pink-200"
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv" className="text-pink-700">
                              CVV
                            </Label>
                            <Input
                              id="cvv"
                              placeholder="123"
                              required
                              value={paymentInfo.cvv}
                              onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
                              className="border-pink-200"
                            />
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="sameAsShipping"
                            checked={sameAsShipping}
                            onCheckedChange={(checked) => setSameAsShipping(checked as boolean)}
                          />
                          <Label htmlFor="sameAsShipping" className="text-pink-700">
                            Billing address same as shipping
                          </Label>
                        </div>

                        <Button
                          type="submit"
                          disabled={isProcessing}
                          className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-full py-6 text-lg font-bold"
                        >
                          {isProcessing ? "Processing..." : "Complete Order"}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                )}

                {paymentMethod === "paypal" && (
                  <Card className="border-2 border-pink-200 rounded-3xl">
                    <CardContent className="p-6">
                      <Button
                        onClick={handlePaymentSubmit}
                        disabled={isProcessing}
                        className="w-full bg-blue-600 hover:bg-blue-700 rounded-full py-6 text-lg font-bold"
                      >
                        {isProcessing ? "Processing..." : "Pay with PayPal"}
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div>
            <Card className="border-2 border-pink-200 rounded-3xl sticky top-8">
              <CardHeader>
                <CardTitle className="text-pink-800">Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <div className="h-12 w-12 overflow-hidden rounded-lg">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-pink-800">{item.name}</p>
                        {item.isBundle ? (
                          <p className="text-sm text-pink-600">Bundle of {item.bundleSize}</p>
                        ) : (
                          <p className="text-sm text-pink-600">Qty: {item.quantity}</p>
                        )}
                        {item.bundleItems && item.bundleItems.length > 0 && (
                          <div className="mt-1 flex flex-wrap gap-1">
                            {item.bundleItems.slice(0, 2).map((bundleItem, index) => (
                              <span key={index} className="text-xs text-pink-500">
                                {bundleItem.name}
                                {index < Math.min(2, item.bundleItems.length - 1) ? ", " : ""}
                              </span>
                            ))}
                            {item.bundleItems.length > 2 && (
                              <span className="text-xs text-pink-500">+{item.bundleItems.length - 2} more</span>
                            )}
                          </div>
                        )}
                      </div>
                      <p className="font-bold text-pink-800">
                        ${(item.price * (item.isBundle ? 1 : item.quantity)).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-3 border-t border-pink-200 pt-6">
                  <div className="flex justify-between">
                    <span className="text-pink-700">Subtotal</span>
                    <span className="font-bold text-pink-800">${subtotal.toFixed(2)}</span>
                  </div>
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
                  <div className="flex justify-between border-t border-pink-200 pt-3 text-xl">
                    <span className="font-bold text-pink-800">Total</span>
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm text-pink-600">
                  <Shield className="h-4 w-4" />
                  <span>Secure checkout powered by SSL encryption</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
