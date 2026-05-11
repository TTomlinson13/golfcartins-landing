import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'

export default function Blog() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="bg-[#16a34a] text-white py-4 px-6 flex items-center justify-between shadow-lg">
        <Link to="/" className="text-xl font-extrabold tracking-wide hover:text-green-200 transition">🏌️ GolfCartIns.com</Link>
        <a href="tel:8006161418" className="bg-white text-[#16a34a] font-bold py-2 px-5 rounded-lg text-sm hover:bg-green-50 transition">📞 800-616-1418</a>
      </nav>
      <main className="max-w-4xl mx-auto px-6 py-14">
        <h1 className="text-3xl font-extrabold mb-10 text-[#16a34a]">Golf Cart Insurance Articles</h1>
        <div className="space-y-5">
          {blogPosts.map(post => (
            <Link key={post.slug} to={`/blog/${post.slug}`}
              className="block border border-green-100 rounded-xl p-6 hover:border-[#16a34a] hover:shadow-md transition">
              <h2 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h2>
              <p className="text-gray-500 text-sm line-clamp-2">{post.excerpt}</p>
              <span className="text-[#16a34a] text-sm mt-3 inline-block">Read more →</span>
            </Link>
          ))}
        </div>
      </main>
      <footer className="bg-[#14532d] text-white py-6 px-6 text-center text-sm mt-10">
        <p>© {new Date().getFullYear()} Tomlinson &amp; Co Insurance | <a href="tel:8006161418" className="hover:text-green-200">800-616-1418</a></p>
      </footer>
    </div>
  )
}
