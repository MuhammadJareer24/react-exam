import { Link, Navigate } from 'react-router-dom'
import Input from '../components/Input'
import AdditionalContent from '../components/AdditionalContent'

const Login = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left side: Signup Form */}

      <div className="flex w-full flex-col justify-center bg-white px-6 py-12 lg:w-1/2 lg:px-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto"
            src="https://baitussalam.org/images/logo-2.svg"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Log into your account
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-6" action="#" method="POST">
            {/* Name Field */}
            <Input />
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Log In
              </button>
            </div>
          </form>
          {/* Additional Link */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Don't have an account?
            <Link
              to="/signup"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      {/* Right side: Additional content (e.g., features or images) */}
      <AdditionalContent />
    </div>
  )
}

export default Login
