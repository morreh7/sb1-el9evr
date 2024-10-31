import React from 'react';

export default function Blog() {
  const posts = [
    {
      title: 'How to Write a Compelling Research Paper',
      excerpt: 'Learn the key strategies for writing research papers that stand out...',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=800'
    },
    {
      title: 'Tips for Academic Success',
      excerpt: 'Discover proven methods to improve your academic performance...',
      date: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800'
    },
    {
      title: 'Understanding Academic Writing Styles',
      excerpt: 'A comprehensive guide to different academic writing styles...',
      date: 'March 5, 2024',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Research Compass Blog</h1>
          <p className="text-xl text-gray-600">Insights and tips for academic success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-blue-600 font-medium hover:text-blue-800">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}