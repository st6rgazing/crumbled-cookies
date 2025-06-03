import { products } from "@/lib/data"
import { ProductCard } from "@/components/product-card"
import { PageHeader } from "@/components/page-header"

export default function NewArrivalsPage() {
  // In a real app, you'd filter by date added
  const newArrivals = products.slice(4, 12)

  return (
    <div className="bg-gradient-to-br from-pastel-pink-50 via-pastel-rose-50 to-pastel-pink-100 min-h-screen">
      <PageHeader title="New Arrivals" description="Fresh from our ovens" />

      <div className="container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
