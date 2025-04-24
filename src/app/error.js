"use client";

import { useEffect } from "react";
import Link from "next/link";
import Page_Hero_Banner from "@/Components/Page_Hero_Banner";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  return (
    <>
    <Page_Hero_Banner title={"OOps"}/>
    <div className="flex flex-col items-center justify-center py-20  text-center px-6">
      <h1 className="text-5xl main_text mb-5">Something went wrong</h1>
      <p className="text-gray-700 text-lg max-w-md mb-6">
        We’re sorry — an unexpected error has occurred. Please try again or go back to the homepage.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-2 rounded-full border border-red-600 cursor-pointer text-red-600 hover:bg-red-600 hover:text-white transition"
        >
          Try Again
        </button>

        <Link
          href="/"
          className="px-6 py-2 rounded-full border border-amber-900  cursor-pointer hover:bg-amber-900 hover:text-white transition"
        >
          Go Home
        </Link>
      </div>
    </div>
    </>
  );
}
