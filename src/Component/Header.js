'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Logo from '../../public/logo.jpg' // Adjust path as necessary

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-green-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Brand */}
         <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.jpg" alt="Uday Agro" width={40} height={40} />
          <div className="text-sm leading-tight">
            <span className="font-bold text-lg">Uday Agro</span><br />
            <span className="text-xs text-green-100">Grow With Nature</span>
          </div>
        </Link>


        {/* Toggle button for mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <nav
          className={`flex-col md:flex md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0 ${
            isOpen ? 'flex' : 'hidden'
          }`}
        >
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}