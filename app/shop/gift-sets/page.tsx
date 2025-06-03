import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GiftIcon } from "lucide-react"

const giftSets = [
  {
    id: 1,
    name: "Classic Cookie Box",
    price: 24.99,
    description: "A selection of our classic cookies including Chocolate Chip, Oatmeal Raisin, and Snickerdoodle.",
    image: "/placeholder.svg?height=400&width=400",
    count: 12,
    packaging: "Elegant Gift Box",
  },
  {
    id: 2,
    name: "Premium Assortment",
    price: 34.99,
    description: "Our premium cookies including Double Chocolate, White Chocolate Macadamia, and Red Velvet.",
    image: "/placeholder.svg?height=400&width=400",
    count: 12,
    packaging: "Luxury Gift Box with Ribbon",
  },
  {
    id: 3,
    name: "Birthday Celebration",
    price: 29.99,
    description: "Perfect for birthdays with Birthday Cake Cookies, Funfetti, and Chocolate Chip.",
    image: "/placeholder.svg?height=400&width=400",
    count: 12,
    packaging: "Festive Birthday Box",
  },
  {
    id: 4,
    name: "Thank You Bundle",
    price: 19.99,
    description: "Show your appreciation with this special assortment of our most popular cookies.",
    image: "/placeholder.svg?height=400&width=400",
    count: 8,
    packaging: "Thank You Gift Box",
  },
  {
    id: 5,
    name: "Corporate Gift Box",
    price: 49.99,
    description: "Impress clients and colleagues with our premium selection in elegant packaging.",
    image: "/placeholder.svg?height=400&width=400",
    count: 24,
    packaging: "Premium Corporate Box",
  },
  {
    id: 6,
    name: "Holiday Special",
    price: 39.99,
    description: "Seasonal favorites perfect for holiday gifting and celebrations.",
    image: "/placeholder.svg?height=400&width=400",
    count: 18,
    packaging: "Festive Holiday Box",
  },
]

export default function GiftSetsPage() {
  return (
    <div className="bg-gradient-to-br from-pastel-pink-50 via-pastel-rose-50 to-pastel-pink-100 min-h-screen">
      <PageHeader title="Gift Sets" description="Perfect presents for every occasion" />

      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {giftSets.map((giftSet) => (
            <Card
              key={giftSet.id}
              className="overflow-hidden border-2 border-pastel-pink-200 transition-all hover:shadow-2xl rounded-3xl group bg-gradient-to-br from-white to-pastel-pink-50 hover:from-pastel-pink-50 hover:to-pastel-rose-50"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={giftSet.image || "/placeholder.svg"}
                  alt={giftSet.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-pastel-pink-500 to-pastel-rose-500 text-white rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                  <GiftIcon className="h-4 w-4" />
                  <span className="font-bold">{giftSet.count} Cookies</span>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-xl text-pastel-pink-800">{giftSet.name}</h3>
                  <Badge className="bg-gradient-to-r from-pastel-pink-200 to-pastel-rose-200 text-pastel-pink-800 border-none">
                    {giftSet.packaging}
                  </Badge>
                </div>
                <p className="text-pastel-pink-700">{giftSet.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pastel-pink-600 to-pastel-rose-600">
                    ${giftSet.price.toFixed(2)}
                  </span>
                  <Button className="bg-gradient-to-r from-pastel-pink-500 to-pastel-rose-500 hover:from-pastel-pink-600 hover:to-pastel-rose-600 rounded-full">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
