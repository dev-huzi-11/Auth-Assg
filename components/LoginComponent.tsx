'use client'
import { signIn } from "next-auth/react";

export default function SignInPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
            <div className="w-full max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-2xl">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Welcome Back!</h1>
                
                <p className="text-center text-gray-600 mb-8">Choose your preferred sign in method</p>
                
                <div className="flex flex-col md:flex-row justify-around gap-4 max-w-md mx-auto">
                    <button 
                        className="flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                        onClick={() => signIn('github')}>
                        Sign in with GitHub
                    </button>
                    
                    <button 
                        className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                        onClick={() => signIn('google')}>
                        Sign in with Google
                    </button>
                </div>
                
                <div className="mt-8 text-center text-sm text-gray-500">
                    By signing in, you agree to our Terms of Service and Privacy Policy
                </div>
            </div>
        </div>
    )
}