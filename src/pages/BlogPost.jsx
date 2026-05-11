import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link to="/blog" className="text-[#16a34a] hover:underline">← Back to Blog</Link>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="bg-[#16a34a] text-white py-4 px-6 flex items-center justify-between shadow-lg">
        <Link to="/" className="text-xl font-extrabold tracking-wide hover:text-green-200 transition">🏌️ GolfCartIns.com</Link>
        <a href="tel:8006161418" className="bg-white text-[#16a34a] font-bold py-2 px-5 rounded-lg text-sm hover:bg-green-50 transition">📞 800-616-1418</a>
      </nav>
      <main className="max-w-3xl mx-auto px-6 py-14">
        <Link to="/blog" className="text-[#16a34a] text-sm mb-6 inline-block hover:underline">← Back to Blog</Link>
        <h1 className="text-3xl font-extrabold mb-8 leading-tight text-gray-900">{post.title}</h1>
        <div className="space-y-4">
          {post.content.split('\n').filter(p => p.trim()).map((para, i) => {
            if (para.startsWith('# ')) return null
            if (para.startsWith('## ')) return <h2 key={i} className="text-xl font-bold mt-6 mb-3 text-[#16a34a]">{para.replace('## ','')}</h2>
            return <p key={i} className="text-gray-700 leading-relaxed">{para}</p>
          })}
        </div>
        <div className="mt-10 bg-[#16a34a] text-white rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold mb-3">Ready for a Free Golf Cart Insurance Quote?</h3>
          <p className="text-green-100 mb-5">Get covered today — fast and affordable.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8006161418" className="bg-white text-[#16a34a] font-bold py-3 px-8 rounded-xl hover:bg-green-50 transition">
              Call 800-616-1418
            </a>
            <a href="https://app.usecanopy.com/c/tomlinson-and-co" target="_blank" rel="noopener noreferrer"
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-white hover:text-[#16a34a] transition">
              Get Quote Online →
            </a>
          </div>
        </div>
      </main>
      <footer className="bg-[#14532d] text-white py-6 px-6 text-center text-sm mt-10">
        <p>© {new Date().getFullYear()} Tomlinson &amp; Co Insurance | <a href="tel:8006161418" className="hover:text-green-200">800-616-1418</a></p>
      </footer>
    </div>
  )
}
