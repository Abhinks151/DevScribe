import { useNavigate } from "react-router-dom";

export default function DevScribeHome() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white">DevScribe</span>
        </div>
        <div className="hidden md:flex space-x-8 text-gray-300">
          <a href="#features" className="hover:text-white transition">
            Features
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
        <button onClick={()=>{navigate('/login')}} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Document Your Code
          <span className="block text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
            Effortlessly
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          DevScribe helps developers create beautiful, comprehensive
          documentation for their projects with AI-powered insights and
          automation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={()=>{navigate('/login')}} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
            Start Free Trial
          </button>
          <button className="bg-transparent border-2 border-purple-400 hover:bg-purple-400/10 text-purple-400 px-8 py-4 rounded-lg text-lg font-semibold transition">
            View Demo
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/15 transition">
            <div className="text-4xl mb-6">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-4">AI-Powered</h3>
            <p className="text-gray-300">
              Leverage artificial intelligence to automatically generate
              documentation from your codebase, saving hours of manual work.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/15 transition">
            <div className="text-4xl mb-6">💻</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Multi-Language
            </h3>
            <p className="text-gray-300">
              Support for all major programming languages including JavaScript,
              Python, Java, Go, and many more.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/15 transition">
            <div className="text-4xl mb-6">👥</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Team Collaboration
            </h3>
            <p className="text-gray-300">
              Work together with your team to create, review, and maintain
              documentation in real-time.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-white/10">
        <div className="text-center text-gray-400">
          <p>&copy; 2024 DevScribe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
