import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogService, BlogPost } from '../../services/blogService';
import { ArrowLeft, Calendar, User, Tag, Share2, BookOpen } from 'lucide-react';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        const post = await blogService.getPostBySlug(slug);
        setBlogPost(post);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error || !blogPost) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error || 'Blog post not found'}</p>
          <Link 
            to="/Blog" 
            className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-custom-blue via-custom-teal to-teal-600 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=600&fit=crop&crop=center')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-custom-blue/60 via-custom-teal/50 to-teal-600/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-center mb-6">
            <nav className="flex items-center space-x-2 text-teal-100">
              <Link to="/" className="hover:text-white transition-colors text-sm">
                Home
              </Link>
              <span className="text-teal-200">/</span>
              <Link to="/Blog" className="hover:text-white transition-colors text-sm">
                Blog
              </Link>
              <span className="text-teal-200">/</span>
              <span className="text-white text-sm font-medium">
                {blogPost.title}
              </span>
            </nav>
          </div>
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {blogPost.title}
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              {blogPost.description}
            </p>
            <div className="flex items-center space-x-6 text-white mb-6">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span className="font-medium">{blogPost.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                <span>{blogPost.read_time}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {blogPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-800 text-sm rounded-full border border-white/50 font-medium shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                           {/* Main Content */}
                 <div className="lg:col-span-2">
                   {/* Article Content */}
                   <article className="max-w-none">
                     {(() => {
                       const paragraphs = (blogPost.content || '').split(/\n\s*\n/).filter(Boolean);
                       const images = Array.isArray(blogPost.gallery) ? blogPost.gallery : [];
                       
                       return paragraphs.map((para, idx) => (
                         <div key={idx} className="mb-10">
                           <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                             {para.trim()}
                           </p>
                           {images[idx] && (
                             <img
                               src={images[idx]}
                               alt={`Section image ${idx + 1}`}
                               className="w-full h-64 md:h-80 object-cover rounded-xl mt-6 shadow-sm"
                               loading="lazy"
                             />
                           )}
                         </div>
                       ));
                     })()}
                   </article>
                 </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Share Section */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Share this article</h3>
              <div className="flex space-x-3">
                <button className="flex-1 bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium">
                  <Share2 className="w-4 h-4 mr-2 inline" />
                  Share
                </button>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
              <div className="space-y-4">
                <p className="text-gray-600 text-sm">Coming soon...</p>
              </div>
            </div>

            {/* Related Tags */}
            <div className="bg-white rounded-2xl p-6 mt-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Related Topics</h3>
              <div className="flex flex-wrap gap-2">
                {['Design Systems', 'UI/UX', 'Web Development', 'Responsive Design', 'CSS Grid', 'Typography'].map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-teal-100 text-teal-700 text-xs rounded-full hover:bg-teal-200 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
