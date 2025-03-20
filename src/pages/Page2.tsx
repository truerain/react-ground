import React, {useState} from 'react';

const Page2: React.FC = () => {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <h1>Page 2</h1>
      <p>This is the content of Page 2.</p>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment {count}
      </button>
    </div>
  );
};

export default Page2;