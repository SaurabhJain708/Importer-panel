"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc"

export default function SignupPage() {
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/v2/dashboard" });
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 space-y-6 text-center">
        <h1 className="text-3xl font-extrabold text-blue-600">
          Welcome to Anantya Overseas
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Join a company that is revolutionizing global trade. At Anantya Overseas, 
          we specialize in seamless import and export solutions, connecting businesses 
          worldwide for mutual growth and success.
        </p>

        <Button
          variant="outline"
          className="w-full mt-6 py-3 flex items-center justify-center gap-2 hover:bg-gray-100"
          onClick={handleGoogleSignIn}
        >
          <FcGoogle size={20} />
          Continue with Google
        </Button>

        <p className="text-sm text-gray-400 mt-4">
          Empowering global trade. Empowering your future.
        </p>
      </div>
    </div>
  )
}
