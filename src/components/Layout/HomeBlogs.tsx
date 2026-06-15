import { blogApi } from '@/service/blog'
import BlogCard from '../Public/BlogCard'
import Link from 'next/link'

const HomeBlogs = async () => {
    let blogs = []
    try {
        const response: any = await blogApi.getBlogs()
        if (response?.data?.blogs) {
            blogs = response.data.blogs
        } else if (Array.isArray(response?.data)) {
            blogs = response.data
        }
    } catch (e) {
        console.error("Failed to fetch blogs:", e)
    }

    const latestBlogs = Array.isArray(blogs) ? [...blogs].reverse().slice(0, 2) : []

    return (
        <section id="blogs" className="py-16 space-y-16 w-full max-w-7xl md:w-11/12 mx-auto relative cursor-default">
            <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4 md:px-0">
                <div className="space-y-4 shadow-sm">
                    <p className="text-primary text-xs uppercase tracking-[0.3em] font-black">Read My Articles</p>
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                        Latest Blogs
                    </h2>
                </div>
                
                <Link 
                    href="/blogs"
                    className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-white hover:text-primary transition-colors group"
                >
                    View All Blogs 
                    <span className="w-8 h-8 rounded-sm mx-2 bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        →
                    </span>
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-0">
                {latestBlogs.length > 0 ? (
                    latestBlogs.map((blog: any) => (
                        <BlogCard key={blog.id || blog._id} blog={blog} />
                    ))
                ) : (
                    <div className="col-span-full py-10 text-center border border-white/5 rounded-sm">
                        <p className="text-secondary opacity-60 text-sm font-medium tracking-wide">No blogs published yet.</p>
                    </div>
                )}
            </div>

            </div>
        </section>
    )
}

export default HomeBlogs
