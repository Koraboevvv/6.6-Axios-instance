import React from 'react'

const Help = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Help</h1>
      <p className="text-gray-700 mb-6 text-center">
        Welcome to the Help Center! Here you can find answers to common questions and get support if needed.
      </p>

      <div className="space-y-6 text-center mt-[200px] mb-[200px]">
        <div>
          <h2 className="text-xl font-semibold">❓ How do I create an account?</h2>
          <p className="text-gray-600">
            Just go to the registration page, fill in your information, and you're ready to go.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">🔐 I forgot my password, what should I do?</h2>
          <p className="text-gray-600">
            Click on "Forgot password?" on the login page and follow the instructions to reset it.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">📩 How can I contact support?</h2>
          <p className="text-gray-600">
            You can contact us via the contact form or email us directly at <span className="text-blue-500 cursor-pointer">Koraboev@gmail.com</span>.
          </p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold">⚙️ Something isn’t working. What now?</h2>
          <p className="text-gray-600">
            Make sure your internet connection is stable. If the issue persists, try refreshing the page or clearing your browser cache.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Help
