import Header from '../../Component/Header'
import Footer from '../../Component/Footer'

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="max-w-md mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Get in Touch</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" required />
          <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" required />
          <textarea placeholder="Your Message" className="w-full p-2 border rounded h-32" required />
          <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </>
  )
}