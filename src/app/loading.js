export default function Loading() {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          <div className="absolute top-0 left-0 w-16 h-16 flex items-center justify-center">
            <span className="text-blue-600 font-semibold">Loading</span>
          </div>
        </div>
      </div>
    );
  }
  