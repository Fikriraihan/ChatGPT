"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#75AB9D] h-screen flex flex-col items-center justify-center text-center">
      <Image src="/ChatGPT_logo.png" width={300} height={300} alt="logo" />
      <button onClick={() => signIn("google")} className="text-white font-bold text-3xl animate-pulse">
        Sign In to use ChatGPT
      </button>
    </div>
  );
}

export default Login;
