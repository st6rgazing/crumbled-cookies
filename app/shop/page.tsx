import { products, categories } from "@/lib/data"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PageHeader } from "@/components/page-header"

export default function ShopPage() {
  return (
    <div className="bg-gradient-to-br from-pastel-pink-50 via-pastel-rose-50 to-pastel-pink-100 min-h-screen">
      <PageHeader title="All Products" description="Browse our delicious cookie collection" />

      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-pastel-pink-200">
              <h3 className="text-xl font-bold text-pastel-pink-800 mb-4">Categories</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox id={`category-${category.id}`} />
                    <Label htmlFor={`category-${category.id}`} className="text-pastel-pink-700">
                      {category.name}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-pastel-pink-200">
              <h3 className="text-xl font-bold text-pastel-pink-800 mb-4">Price Range</h3>
              <div className="space-y-6">
                <Slider defaultValue={[0, 10]} min={0} max={10} step={0.1} />
                <div className="flex items-center justify-between">
                  <div className="w-20">
                    <Input type="number" placeholder="Min" className="border-pastel-pink-200" />
                  </div>
                  <span className="text-pastel-pink-700">to</span>
                  <div className="w-20">
                    <Input type="number" placeholder="Max" className="border-pastel-pink-200" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-pastel-pink-200">
              <h3 className="text-xl font-bold text-pastel-pink-800 mb-4">Dietary Options</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="gluten-free" />
                  <Label htmlFor="gluten-free" className="text-pastel-pink-700">
                    Gluten Free
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="vegan" />
                  <Label htmlFor="vegan" className="text-pastel-pink-700">
                    Vegan
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="nut-free" />
                  <Label htmlFor="nut-free" className="text-pastel-pink-700">
                    Nut Free
                  </Label>
                </div>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-pastel-pink-500 to-pastel-rose-500 hover:from-pastel-pink-600 hover:to-pastel-rose-600 rounded-full">
              Apply Filters
            </Button>
          </div>

          {/* Products */}
          <div className="md:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-pastel-pink-700">Showing {products.length} products</p>
              <div className="flex items-center space-x-2">
                <span className="text-pastel-pink-700">Sort by:</span>
                <select className="border-2 border-pastel-pink-200 rounded-full px-4 py-2 bg-white text-pastel-pink-700 focus:outline-none focus:ring-2 focus:ring-pastel-pink-400">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                  <option>Best Selling</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <div className="flex space-x-2">
                <Button variant="outline" className="border-2 border-pastel-pink-300 text-pastel-pink-700 rounded-full">
                  Previous
                </Button>
                <Button className="bg-gradient-to-r from-pastel-pink-500 to-pastel-rose-500 hover:from-pastel-pink-600 hover:to-pastel-rose-600 rounded-full">
                  1
                </Button>
                <Button variant="outline" className="border-2 border-pastel-pink-300 text-pastel-pink-700 rounded-full">
                  2
                </Button>
                <Button variant="outline" className="border-2 border-pastel-pink-300 text-pastel-pink-700 rounded-full">
                  3
                </Button>
                <Button variant="outline" className="border-2 border-pastel-pink-300 text-pastel-pink-700 rounded-full">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
