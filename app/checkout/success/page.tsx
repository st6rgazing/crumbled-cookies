import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Package, Mail } from "lucide-react"

export default function CheckoutSuccessPage() {
  const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase()

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <div className="container py-16">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-green-100 p-6">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
          </div>

          <h1 className="mb-4 text-4xl font-bold text-pink-800">Order Confirmed!</h1>
          <p className="mb-8 text-lg text-pink-600">
            Thank you for your purchase. Your order has been successfully placed.
          </p>

          <Card className="border-2 border-pink-200 rounded-3xl mb-8">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-pink-800 mb-2">Order Details</h2>
                  <p className="text-pink-600">
                    Order Number: <span className="font-bold">#{orderNumber}</span>
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Package className="h-6 w-6 text-pink-500 mt-1" />
                    <div>
                      <h3 className="font-bold text-pink-800">Shipping</h3>
                      <p className="text-pink-600">Your order will be shipped within 1-2 business days.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-6 w-6 text-pink-500 mt-1" />
                    <div>
                      <h3 className="font-bold text-pink-800">Confirmation</h3>
                      <p className="text-pink-600">A confirmation email has been sent to your email address.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-full px-8"
              asChild
            >
              <Link href="/">Continue Shopping</Link>
            </Button>
            <Button
              variant="outline"
              className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 rounded-full px-8"
              asChild
            >
              <Link href="/orders">View Orders</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
