import Header from '../../Component/Header'
import Footer from '../../Component/Footer'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          🌿 Our Story – Rooted in Nature, Grown by Unity
        </h1>

        {/* Story Section */}
        <section className="mb-8 text-gray-700 leading-relaxed">
          <p>
            We are five passionate partners brought together by a shared vision: to create a sustainable and nature-driven future.
            With a strong belief in regenerative agriculture and environmental responsibility, we have collectively acquired a 10-acre parcel of fertile land,
            which now serves as the foundation for our Agroforestry and Fruit Farming Project.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">🍃 Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Our mission is to blend modern organic practices with traditional wisdom, nurturing the land while producing diverse, chemical-free fruits and timber.
            Through this integrated approach, we aim to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>🌱 Promote biodiversity</li>
            <li>🌾 Restore soil health</li>
            <li>🌻 Generate sustainable yields</li>
            <li>🌍 Inspire others to reconnect with nature</li>
          </ul>
        </section>

        {/* Closing Thought */}
        <section className="mt-10">
          <p className="text-gray-700 leading-relaxed">
            This is more than a farm—it&apos;s a living example of how collaboration, commitment, and care for the Earth
            can create something truly impactful.
          </p>
          <p className="text-gray-700 mt-4">
            Together, we&apos;re planting seeds not just for crops, but for a greener future.
          </p>
          <blockquote className="mt-6 italic text-green-800 border-l-4 border-green-600 pl-4">
            “We don&apos;t just grow crops—we grow trust, health, and connection.” — AgriFarm Team
          </blockquote>
        </section>
      </main>
      <Footer />
    </>
  )
}