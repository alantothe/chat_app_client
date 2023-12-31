import React from 'react'

function LoginPage() {
  return (
     <div className="bg-purple-700 min-h-screen flex items-center justify-center">
         <section className="bg-gray-800 p-10 rounded-lg w-96">
          <header className="text-center">
          <h1 className="text-4xl font-bold mb-10 text-white">Login Page</h1>
          <h3 className="text-white mb-5" >Welcome Back to Alan_Chat</h3>
        </header>
    <form className="flex flex-col item-center" >
      <input className='text-white mb-5' placeholder="Enter E-Mail"></input>

      <input className='text-white mb-5' placeholder="Enter Password" type="password" ></input>
      <button type="submit" className="bg-purple-700 text-white rounded px-5 py-2 mb-6 w-full">Login</button>
    </form>
    </section>
    </div>
  )
}

export default LoginPage
