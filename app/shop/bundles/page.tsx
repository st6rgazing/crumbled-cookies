import { products } from "@/lib/data"
import { ProductCard } from "@/components/product-card"
import { PageHeader } from "@/components/page-header"

export default function BundlesPage() {
  // Filter bundle products
  const bundleProducts = products.filter((p) => p.type === "bundle")

  return (
    <div className="bg-gradient-to-br from-pastel-pink-50 via-pastel-rose-50 to-pastel-pink-100 min-h-screen">
      <PageHeader title="Custom Cookie Bundles" description="Create your perfect mix of mini cookies" />

      <div className="container py-12">
        <div className="mb-8 text-center max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-pink-200 mb-8">
            <h2 className="text-2xl font-bold text-pink-800 mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-pink-600">1</span>
                </div>
                <h3 className="font-bold text-pink-800 mb-2">Choose Bundle Size</h3>
                <p className="text-pink-600 text-sm">Select from 3, 6, 9, or 12 cookie bundles</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-pink-600">2</span>
                </div>
                <h3 className="font-bold text-pink-800 mb-2">Select Your Cookies</h3>
                <p className="text-pink-600 text-sm">Pick any combination from our 3 delicious flavors</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-pink-600">3</span>
                </div>
                <h3 className="font-bold text-pink-800 mb-2">Add to Cart</h3>
                <p className="text-pink-600 text-sm">Pay exactly the sum of your selected cookies</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-pink-50 rounded-2xl p-4 border border-pink-200">
                <h3 className="font-bold text-pink-800 mb-2">Mini Chocolate Chip</h3>
                <p className="text-pink-600 text-sm mb-2">Classic chocolate chip goodness in bite-sized form</p>
                <p className="font-bold text-pink-700">$1.25 each</p>
              </div>
              <div className="bg-pink-50 rounded-2xl p-4 border border-pink-200">
                <h3 className="font-bold text-pink-800 mb-2">Mini Sugar Cookie</h3>
                <p className="text-pink-600 text-sm mb-2">Sweet and simple with a soft, tender texture</p>
                <p className="font-bold text-pink-700">$1.15 each</p>
              </div>
              <div className="bg-pink-50 rounded-2xl p-4 border border-pink-200">
                <h3 className="font-bold text-pink-800 mb-2">Mini Oatmeal</h3>
                <p className="text-pink-600 text-sm mb-2">Hearty oatmeal with a hint of cinnamon spice</p>
                <p className="font-bold text-pink-700">$1.25 each</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-pink-100 rounded-xl border border-pink-300">
              <p className="text-pink-800 font-medium">
                🍪 <strong>Complete Customization:</strong> Choose any combination of cookies! Want 6 chocolate chip
                cookies? Or a mix of all three? You decide!
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bundleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {bundleProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-pink-600">No bundles available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  )
}
