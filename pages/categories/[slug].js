import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

const productsData = {
  dunks: [
    { name: "Dunk Low Panda", price: "₹3,999", img: "/panda.jpg" },
    { name: "Dunk Low Grey Fog", price: "₹4,299", img: "/greyfog.jpg" },
  ],
  jordans: [
    { name: "Air Jordan 1 Mid", price: "₹4,499", img: "/jordan.jpg" },
    { name: "Air Jordan 1 High", price: "₹5,499", img: "/jordan-high.jpg" },
  ],
  "air-force": [
    { name: "Air Force 1 White", price: "₹3,499", img: "/airforce.jpg" },
    { name: "Air Force 1 Black", price: "₹3,799", img: "/airforce-black.jpg" },
  ],
}

export default function CategoryPage() {
  const router = useRouter()
  const { slug } = router.query
  const products = productsData[slug] || []

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 capitalize">{slug?.replace("-", " ")}</h1>
      
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <div key={idx} className="border rounded-xl p-4 shadow-sm hover:shadow-lg transition">
              <div className="relative w-full h-60">
            <Image 
  src={product.img} 
  alt={product.name} 
  width={400} 
  height={400} 
  className="object-contain rounded-md mx-auto" 
/>

              </div>
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <Link href={`/products/${product.name.toLowerCase().replace(/ /g, "-")}`}>
                <button className="mt-3 bg-black text-white px-4 py-2 rounded-lg w-full">
                  View Product
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
