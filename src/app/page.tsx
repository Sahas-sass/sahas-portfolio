import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Temporary placeholder to push content below the fixed navbar */}
      <div className="pt-32 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mt-20">
          Welcome to the Portfolio
        </h1>
        <p className="mt-4 text-gray-400">
          Click the toggle button in the top right to test the global state switch.
        </p>
      </div>
    </main>
  );
}