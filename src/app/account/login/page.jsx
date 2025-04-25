"use client";
import Page_Hero_Banner from "@/Components/Page_Hero_Banner";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Metadata = {
  title: {
    absolute: "Account",
  },
};

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    router.push("/");
  };

  return (
    <>
      <Page_Hero_Banner title={"Account"} />

      <div className="md:py-20 md:px-10 p-10 flex items-center justify-center">
        <div className="bg-gray-100 p-10 rounded-md shadow-md max-w-md w-full flex flex-col items-center justify-center mx-auto">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
              required
            />
            <button
              type="submit"
              className="w-full py-2 rounded-full border-2 cursor-pointer border-orange-800 text-orange-800 hover:bg-orange-800 hover:text-white transition"
            >
              Sign In
            </button>
          </form>
          <div className="text-sm text-gray-600 mt-4 text-center space-y-1">
            <p>
              <a href="#" className="hover:text-orange-800">
                Forgot your password?
              </a>
            </p>
            <p>
              <a href="#" className="hover:text-orange-800 mr-2">
                Create account
              </a>
              <a href="#" className="hover:text-orange-800">
                Return to Store
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
