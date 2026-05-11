import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'

const CANOPY_URL = "https://app.usecanopy.com/c/tomlinson-and-co"
const PHONE = "800-616-1418"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context":"https://schema.org",
        "@type":"WebSite",
        "name":"Golf Cart Insurance Florida",
        "url":"https://golfcartins.com",
        "description":"Fast, affordable golf cart insurance in Florida. Get a free quote from Tomlinson & Co.",
        "telephone": PHONE
      })}} />

      {/* Nav */}
      <nav className="bg-[#16a34a] text-white py-4 px-6 flex items-center justify-between shadow-lg">
        <div className="text-xl font-extrabold tracking-wide">🏌️ GolfCartIns.com</div>
        <a href={`tel:${PHONE.replace(/-/g,'')}`} className="bg-white text-[#16a34a] font-bold py-2 px-5 rounded-lg text-sm hover:bg-green-50 transition">
          📞 {PHONE}
        </a>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#16a34a] to-[#14532d] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight">
          Golf Cart Insurance<br />
          <span className="text-[#86efac]">Fast, Affordable Coverage for Your Cart</span>
        </h1>
        <p className="text-xl text-green-200 mb-10 max-w-2xl mx-auto">
          Your standard auto policy doesn't cover golf carts. Get the right protection today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={CANOPY_URL} target="_blank" rel="noopener noreferrer"
            className="bg-white text-[#16a34a] font-bold py-4 px-10 rounded-xl text-xl hover:bg-green-50 transition shadow-lg">
            Get a Quote →
          </a>
          <a href={`tel:${PHONE.replace(/-/g,'')}`}
            className="border-2 border-white text-white font-bold py-4 px-10 rounded-xl text-xl hover:bg-white hover:text-[#16a34a] transition">
            Call {PHONE}
          </a>
        </div>
      </section>

      {/* Florida Angle */}
      <section className="py-14 px-6 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-5 text-[#16a34a]">Florida: The Golf Cart Capital of the World</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            From The Villages to Peachtree City, Florida has more street-legal golf carts than anywhere on earth.
            Whether you ride on private property, golf courses, or public streets — you need proper coverage.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { icon: "🏘️", title: "The Villages", desc: "The world's largest golf cart community — 100,000+ residents rely on carts daily." },
              { icon: "🛣️", title: "Street-Legal Carts", desc: "Florida allows golf carts on roads under 35 mph — proper insurance is essential." },
              { icon: "⚠️", title: "Auto Policy Gap", desc: "Standard auto insurance does NOT cover golf carts. A separate policy is required." },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-xl p-5 shadow-sm border border-green-100">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-[#16a34a]">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-[#16a34a]">What We Cover</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "⚖️", title: "Liability", desc: "Covers injury to others or damage to their property if you're at fault." },
              { icon: "💥", title: "Collision", desc: "Repairs or replaces your cart after a collision with another vehicle or object." },
              { icon: "🌪️", title: "Comprehensive", desc: "Protection from theft, fire, weather, and vandalism." },
              { icon: "🔒", title: "Theft Coverage", desc: "Golf carts are frequently stolen. We cover replacement costs." },
              { icon: "🏥", title: "Personal Injury", desc: "Medical payments for you and your passengers after an accident." },
              { icon: "🔧", title: "Accessories", desc: "Custom accessories, upgraded seats, and add-ons are covered too." },
            ].map(item => (
              <div key={item.title} className="bg-green-50 rounded-xl p-6 border border-green-100">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-[#16a34a]">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Tomlinson */}
      <section className="py-16 px-6 bg-[#16a34a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-10">Why Tomlinson &amp; Co?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🏢", title: "Since 1966", desc: "Over 55 years protecting Florida residents and their property." },
              { icon: "📋", title: "150+ Carriers", desc: "We find you the best golf cart insurance rate on the market." },
              { icon: "🗺️", title: "9 States", desc: "Licensed across Florida and 8 other states for comprehensive coverage." },
            ].map(item => (
              <div key={item.title} className="bg-white/10 rounded-xl p-6">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-green-200 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a href={CANOPY_URL} target="_blank" rel="noopener noreferrer"
              className="bg-white text-[#16a34a] font-bold py-4 px-10 rounded-xl text-xl hover:bg-green-50 transition shadow-lg inline-block">
              Get a Free Quote →
            </a>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-10 text-[#16a34a]">Golf Cart Insurance Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.slice(0, 3).map(post => (
              <Link key={post.slug} to={`/blog/${post.slug}`}
                className="block bg-white border border-green-100 rounded-xl p-5 hover:border-[#16a34a] hover:shadow-md transition">
                <h3 className="font-bold text-base mb-2 leading-snug text-gray-800">{post.title}</h3>
                <span className="text-[#16a34a] text-sm">Read more →</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/blog" className="text-[#16a34a] hover:text-green-800 font-semibold transition">View All Articles →</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#14532d] text-white py-8 px-6 text-center text-sm">
        <p className="mb-2">
          <a href="https://tomlinsonandco.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-200 mr-4">TomlinsonAndCo.com</a>
          <a href="https://hoinsurance.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-200 mr-4">HOInsurance.com</a>
          <a href="https://floridauto.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-200">FloridAuto.com</a>
        </p>
        <p>© {new Date().getFullYear()} Tomlinson &amp; Co Insurance | {PHONE}</p>
        <p className="mt-1 text-xs text-green-400">Florida Licensed Insurance Agency</p>
      </footer>
    </div>
  )
}
