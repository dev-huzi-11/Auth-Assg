'use client'
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const router = useRouter();
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-600 to-blue-500">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center text-white">
        <h1 className="text-5xl font-bold mb-6">Welcome to SecureAuth</h1>
        <p className="text-xl mb-8 max-w-2xl">
          Your secure authentication solution. Protect your digital identity
          with our state-of-the-art authentication system.
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => router.push("/login")}
            className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-opacity-90 transition-all"
          >
            Sign In
          </button>

          <button className="px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all">
            Register
          </button>
        </div>

        <div className="mt-12 flex items-center gap-8">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">1M+</span>
            <span className="text-sm opacity-80">Active Users</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">99.9%</span>
            <span className="text-sm opacity-80">Uptime</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">24/7</span>
            <span className="text-sm opacity-80">Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
