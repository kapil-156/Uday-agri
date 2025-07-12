import Link from 'next/link'
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white px-6 py-10 mt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm">

        {/* About */}
        <div>
          <h3 className="font-semibold mb-2">🌿 AgriFarm</h3>
          <p>Growing fresh, organic produce with love from Tamil Nadu.</p>
          <p className="mt-2">Open Hours: Mon–Sat, 6am–6pm</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">🔗 Quick Links</h3>
          <ul className="space-y-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2">📞 Contact</h3>
          <p>📍 Kanchipuram Rd, Chennai</p>
          <p>☎️ +91 98765 43210</p>
          <p>📧 hello@agrifarm.in</p>
          <div className="flex space-x-4 mt-3">
            <FaInstagram className="text-pink-400 hover:text-pink-300 cursor-pointer" />
            <FaFacebook className="text-blue-400 hover:text-blue-300 cursor-pointer" />
            <FaYoutube className="text-red-400 hover:text-red-300 cursor-pointer" />
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="font-semibold mb-2">📩 Newsletter</h3>
          <p>Sign up for seasonal updates and crop alerts:</p>
          <form className="mt-2 space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-2 py-1 rounded text-black"
            />
            <button
              type="submit"
              className="bg-white text-green-900 font-semibold px-4 py-1 rounded hover:bg-green-100"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 border-t border-green-700 pt-4 text-center text-xs">
        &copy; {new Date().getFullYear()} AgriFarm • Powered by soil, sunlight & Next.js ☀️
      </div>
    </footer>
  )
}