import Header from '../../Component/Header'
import Footer from '../../Component/Footer'
import ProductCard from "../../Component/Product";


const products = [
  {
    name: "Organic Tomatoes",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
    description: "Juicy, pesticide-free tomatoes fresh from our vines.",
    price: "₹120/kg",
  },
  {
    name: "Farm-Fresh Eggs",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
    description: "Laid daily by free-range hens fed with native grains.",
    price: "₹10/egg",
  },
];
export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Our Products</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
