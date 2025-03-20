import React from 'react'
import { FaBars } from 'react-icons/fa'

function Header() {
  return (
    <header className="bg-green-500 text-white flex justify-between items-center py-4 px-6 fixed w-full top-0">
      <div className="flex items-center">
        <button className="mr-4">
          <FaBars className="w-6 h-6" />
        </button>
        <h1>React Ground by Github Copilot</h1>
      </div>
      <div className="flex-grow mx-4">
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full p-2 rounded border border-gray-300"
        />
      </div>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Logout
      </button>
    </header>
  )
}

export default Header
