'use client'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import ProductCard from '../Component/Product'

const carouselImages = [
  { src: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=900&q=80', alt: 'Farm landscape with sunrise' },
  { src: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80', alt: 'Irrigated farmland with crops' },
  { src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80', alt: 'Fresh tomatoes ready for harvest' },
  { src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80', alt: 'Cattle grazing peacefully' },
  { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80', alt: 'Morning mist over mango grove' },
]

const featuredProducts = [
  {
    name: 'Mangoes – Alphonso',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
    description: 'Juicy and naturally ripened. No chemicals.',
    price: '₹150/kg',
  },
  {
    name: 'Neem Timber',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    description: 'Sustainably grown, ideal for eco furniture.',
    price: '₹1,200/cu.ft',
  },
]

const blogPosts = [
  {
    title: 'Soil Health: Our Regenerative Practices',
    slug: 'soil-health',
    description: 'Discover how we enrich soil with biofertilizers and cover crops.',
  },
  {
    title: 'What Makes Organic Fruit Farming Work?',
    slug: 'organic-fruit-farming',
    description: 'Traditional wisdom + smart strategies for luscious fruits.',
  },
]

export default function HomePage() {
  const [current, setCurrent] = useState(0)
  const nextSlide = () => setCurrent((current + 1) % carouselImages.length)
  const prevSlide = () => setCurrent((current - 1 + carouselImages.length) % carouselImages.length)

  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-10">

        {/* Hero Section */}
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-700 mb-3">🌾 Growing Nature’s Promise</h1>
          <p className="text-gray-700 mb-6">
            Welcome to AgriFarm — where sustainability meets tradition on 10 acres of organic bliss.
          </p>
          <Link href="/products">
            <button className="bg-green-700 text-white px-6 py-2 rounded-full shadow hover:bg-green-800">
              Shop Our Produce
            </button>
          </Link>
        </section>

        {/* Carousel */}
        <section className="relative mb-16">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src={carouselImages[current].src}
              alt={carouselImages[current].alt}
              width={900}
              height={500}
              className="w-full h-[400px] object-cover transition duration-500 ease-in-out"
            />
          </div>
          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 text-green-700 px-2 py-1 rounded-full shadow hover:bg-white"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 text-green-700 px-2 py-1 rounded-full shadow hover:bg-white"
          >
            ▶
          </button>
        </section>

        {/* About Preview */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">🌿 Our Story</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We&apos;re five partners passionate about regenerative farming, biodiversity, and sustainable timber.
          </p>
          <Link href="/about">
            <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Learn More
            </button>
          </Link>
        </section>

        {/* Featured Products */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">🍅 Featured Produce</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProducts.map((item, index) => (
              <ProductCard key={index} {...item} />
            ))}
          </div>
        </section>

        {/* Blog Preview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">📝 From Our Blog</h2>
          <div className="space-y-4">
            {blogPosts.map((post, index) => (
              <div  key={index} className="block p-4 bg-green-50 rounded shadow hover:bg-green-100">
                <h3 className="text-lg font-semibold text-green-800">{post.title}</h3>
                <p className="text-gray-700 text-sm mt-1">{post.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">📸 Farm Life</h2>
          <p className="text-gray-700 mb-3">See snapshots of our crops, moments, and team in action.</p>
          <Link href="/gallery">
            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
              View Gallery
            </button>
          </Link>
        </section>

      </main>

      <Footer />
    </>
  )
}