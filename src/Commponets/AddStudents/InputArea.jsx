import React from 'react'

const InputArea = () => {
  return (
    <div className='w-full flex items-center justify-center'>
        <div className="input h-10 flex border rounded-3xl hover:border-blue-500">
            <input type="text" className='outline-none px-2' placeholder='Name'/>
            <input type="Number" className='outline-none px-2 border-l' placeholder='table'/>
            <button className='border-l-1 w-15 font-bold hover:text-blue-500'>Add</button>
        </div>
    </div>
  )
}

export default InputArea