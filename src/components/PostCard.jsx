// src/components/PostCard.jsx
export default function PostCard({ post }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <img
          src={post.image || "/placeholder.png"}
          alt={post.title}
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-4" />
      </div>

      <div className="px-6 pb-6">
        <h2 className="text-xl font-semibold text-gray-900 text-center mb-3">
          {post.title}
        </h2>

        <p className="text-sm text-gray-600 text-center mb-5">{post.author}</p>

        <p className="text-sm text-gray-700 text-center">
          {post.content.length > 100
            ? post.content.slice(0, 100) + "..."
            : post.content}
        </p>

        <div className="mt-5 text-center">
          <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
