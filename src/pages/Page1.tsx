import React, { useState } from 'react'

function Page1() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Page 1</h2>
      <p>Count: {count}</p>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  )
}

export default Page1