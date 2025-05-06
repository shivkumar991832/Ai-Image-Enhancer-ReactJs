import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-full '>
      <div className='animate-spin border-t-transparent border-7 w-20 h-20 rounded-full border-red-500 mb-14'></div>
    </div>
  )
}

export default Loading
