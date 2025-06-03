import { PageHeader } from "@/components/page-header"

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-br from-pastel-pink-50 via-pastel-rose-50 to-pastel-pink-100 min-h-screen">
      <PageHeader title="About Us" description="The story behind our sweet treats" />

      <div className="container py-12">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-pastel-pink-200">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-pastel-pink-800 mb-6">Our Sweet Beginning</h2>
              <div className="space-y-6 text-pastel-pink-700">
                <p>
                  Crumbled started in 2018 as a small home bakery with a big dream. Our founder, Emma, turned her
                  passion for baking into a thriving business that brings joy to cookie lovers everywhere.
                </p>
                <p>
                  What began as weekend sales at local farmers' markets quickly grew into a beloved brand known for
                  exceptional quality and irresistible flavors. Our commitment to using only premium ingredients and
                  traditional baking methods sets us apart.
                </p>
                <p>
                  Today, Crumbled ships our handcrafted cookies nationwide, but we still maintain the same attention to
                  detail and love in every batch. Each cookie is made fresh daily in our bakery, using recipes perfected
                  over years of delicious experimentation.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-pastel-pink-800 mt-12 mb-6">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-pastel-pink-100 to-pastel-rose-100 p-6 rounded-2xl border-2 border-pastel-pink-200">
                  <h3 className="font-bold text-xl text-pastel-pink-800 mb-2">Quality Ingredients</h3>
                  <p className="text-pastel-pink-700">
                    We use only the finest ingredients, sourced responsibly and selected for exceptional flavor.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-pastel-pink-100 to-pastel-rose-100 p-6 rounded-2xl border-2 border-pastel-pink-200">
                  <h3 className="font-bold text-xl text-pastel-pink-800 mb-2">Handcrafted Care</h3>
                  <p className="text-pastel-pink-700">
                    Every cookie is made by hand with attention to detail and consistency.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-pastel-pink-100 to-pastel-rose-100 p-6 rounded-2xl border-2 border-pastel-pink-200">
                  <h3 className="font-bold text-xl text-pastel-pink-800 mb-2">Community Focus</h3>
                  <p className="text-pastel-pink-700">
                    We give back to our community through donations and volunteer work.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-pastel-pink-100 to-pastel-rose-100 p-6 rounded-2xl border-2 border-pastel-pink-200">
                  <h3 className="font-bold text-xl text-pastel-pink-800 mb-2">Sustainable Practices</h3>
                  <p className="text-pastel-pink-700">
                    We're committed to eco-friendly packaging and reducing our environmental impact.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pastel-pink-300 to-pastel-rose-400 opacity-20"></div>
              <img
                src="/placeholder.svg?height=800&width=600"
                alt="Our bakery"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pastel-pink-600 to-pastel-rose-600 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-pastel-pink-200"
              >
                <div className="aspect-square">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-xl text-pastel-pink-800 mb-1">{member.name}</h3>
                  <p className="text-pastel-pink-600 mb-3">{member.role}</p>
                  <p className="text-pastel-pink-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const team = [
  {
    name: "Emma Johnson",
    role: "Founder & Head Baker",
    bio: "Emma started Crumbled in her home kitchen and has grown it into the beloved brand it is today.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Michael Chen",
    role: "Executive Pastry Chef",
    bio: "With 15 years of experience, Michael brings creativity and precision to our cookie recipes.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Sarah Williams",
    role: "Operations Manager",
    bio: "Sarah ensures that every order is perfect and delivered on time to our valued customers.",
    image: "/placeholder.svg?height=400&width=400",
  },
]
