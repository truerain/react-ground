import React from 'react'
import useMdiStore from '../stores/MdiStore'

function Navi() {
  const { addTab } = useMdiStore();

  return (
    <nav className="w-64 bg-gray-200 p-4 h-[calc(100vh-4rem)] overflow-y-auto">
      <ul>
        <li className="mb-2">
          <a href="#" className="text-blue-700 font-bold">My Components</a>
          <ul className="ml-4 mt-2">
            <li className="mb-2"><a href="#" className="text-blue-500" onClick={() => {console.log("tab"); addTab("Page1")}}>Page1</a></li>
          </ul>
          <ul className="ml-4 mt-2">
            <li className="mb-2"><a href="#" className="text-blue-500" onClick={() => {console.log("tab"); addTab("Page2")}}>Page2</a></li>
          </ul>
          <ul className="ml-4 mt-2">
            <li className="mb-2"><a href="#" className="text-blue-500">Calendar</a></li>
          </ul>
        </li>
        <li className="mb-2">
          <a href="#" className="text-blue-700 font-bold">R3F</a>
          <ul className="ml-4 mt-2">
            <li className="mb-2"><a href="#" className="text-blue-500">Geometry</a></li>
            <li className="mb-2"><a href="#" className="text-blue-500">Material</a></li>
          </ul>
        </li>
        <li className="mb-2">
          <a href="#" className="text-blue-700 font-bold">CSS</a>
          <ul className="ml-4 mt-2">
            <li className="mb-2"><a href="#" className="text-blue-500">3D Styles</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Navi
