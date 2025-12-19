import { useNavigate } from "react-router-dom";

export default function DevScribeHome() {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/login");
    // console.log('Navigate to /login');
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">D</span>
          </div>
          <span className="text-2xl font-bold text-white">DevScribe</span>
        </div>
        <button
          onClick={handleGetStarted}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-lg transition-colors font-medium"
        >
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Share Your Ideas.
          <br />
          <span className="text-purple-400">Build Your Blog.</span>
        </h1>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          A simple, powerful platform for developers to write, publish, and
          manage blog posts. Start sharing your thoughts with the world today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleGetStarted}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Create Your First Post
          </button>

          <button
            onClick={handleGetStarted}
            className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            View All Blogs
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <div className="text-5xl mb-4">✍️</div>
            <h3 className="text-xl font-bold text-white mb-3">Write & Edit</h3>
            <p className="text-gray-400">
              Create and edit your blog posts with ease. Simple editor to focus
              on your content.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-white mb-3">Manage Posts</h3>
            <p className="text-gray-400">
              View, update, or delete your posts anytime. Full control over your
              content.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-white mb-3">
              Personal Space
            </h3>
            <p className="text-gray-400">
              Each user gets their own dashboard. Your blogs, your way, securely
              stored.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto bg-slate-800 border border-slate-700 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to start writing?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Join DevScribe and share your developer journey with the community.
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Sign Up Free
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-slate-800">
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; 2025 DevScribe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
