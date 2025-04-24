"use client"
import Page_Hero_Banner from '@/Components/Page_Hero_Banner'
import { useRouter } from 'next/router'

const Login = () => {
    const router = useRouter();
  return (
 <>
 <Page_Hero_Banner title={"Account"}/>

<div className='md:py-20 md:px-10 p-10 flex items-center justify-center'>

 <div className="bg-gray-100 p-10  flex-col rounded-md shadow-md max-w-md w-full flex items-center justify-center mx-auto">
        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email"
          
            className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
          <button
            onClick={()=> router.push("/")}
            className="w-full py-2 rounded-full border-2 cursor-pointer border-orange-800 text-orange-800 hover:bg-orange-800 hover:text-white transition"
          >
            Sign In
          </button>
        </form>
        <div className="text-sm text-gray-600 mt-4 text-center space-y-1">
          <p>
            <a href="#" className="hover:text-orange-800">Forgot your password?</a>
          </p>
          <p>
            <a href="#" className="hover:text-orange-800 mr-2">Create account</a>
            <a href="#" className="hover:text-orange-800">Return to Store</a>
          </p>
        </div>
      </div>
      </div>
 </>
  )
}

export default Login