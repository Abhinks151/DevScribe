//claude ai to do this

const Loading = ({ message = "Loading..." }: { message?: string }) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-purple-800 flex items-center justify-center p-4">
      <div className="text-center">
        {/* Animated logo/icon */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 border-4 border-transparent border-t-blue-400 border-r-blue-500 rounded-full animate-spin" />

          {/* Middle pulsing ring */}
          <div
            className="absolute inset-3 border-4 border-transparent border-b-purple-400 border-l-purple-500 rounded-full animate-spin"
            style={{ animationDuration: "2s", animationDirection: "reverse" }}
          />

          {/* Inner glowing core */}
          <div className="absolute inset-8 bg-linear-to-br from-blue-400 to-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50" />

          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full shadow-lg" />
          </div>
        </div>

        {/* Text content */}
        <h2 className="text-3xl font-bold text-white mb-3">DevScribe</h2>

        <p className="text-lg text-purple-200 mb-6 font-medium">{message}</p>

        {/* Progress dots */}
        <div className="flex justify-center gap-2">
          <div
            className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
