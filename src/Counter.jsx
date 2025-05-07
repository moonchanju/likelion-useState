import React, {useState} from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);

    const handleIncrease=()=> {
        setCount((prev)=>prev+1);
    }

    const handleDecrease =() =>
    {
        setCount((prev)=>prev-1);
    }

    const handleReset = () => {
        setCount(0);
    }

    const btnStyle=
    "px-4 py-2 bg-white border hover:bg-yellow-300 cursor-pointer rounded-2xl"
  return (
    <div className="flex flex-col bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-4">counter</h1>
      <p className="text-2xl mb-6">현재값: {count}</p>
      <div className="flex">
      <button onClick={handleIncrease} className={btnStyle} >+1</button>
      <button onClick={handleDecrease} className={btnStyle} >-1</button>
      <button onClick={handleReset} className={btnStyle} >Reset</button>
      </div>
     
    </div>
  )
}

export default Counter
