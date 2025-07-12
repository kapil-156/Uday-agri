import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Link from "next/link";
import React from "react";

const posts = [
  {
    title: "Why We Switched to Organic Farming",
    slug: "organic-switch",
    date: "July 2025",
    description:
      "Our journey into pesticide-free agriculture and sustainable soil care.",
  },
  {
    title: "Monsoon Farming Tips",
    slug: "monsoon-farming",
    date: "June 2025",
    description:
      "How we protect our crops and optimize growth during rainy season.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-green-700 mb-6">🌾 Farm Blog</h1>
        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="block p-4 bg-green-50 rounded shadow hover:bg-green-100"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-xs text-gray-500">{post.date}</p>
              <p className="text-gray-700 mt-1">{post.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
