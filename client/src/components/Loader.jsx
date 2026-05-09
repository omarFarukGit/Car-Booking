import React from 'react'

function Loader() {
  return (
    <div className='flex justify-center items-center h-[80vh]'>
      <div className='animate-spin rounded-full h-14 w-14 border-4 border-gray-300 border-r-red-400'></div>
    </div>
  )
}

export default Loader
