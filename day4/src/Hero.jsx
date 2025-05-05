import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center gap-y-4 bg-blue-950 text-white w-full text-center h-[90vh] justify-center'>
        <h1 className='text-3xl font-mono'>React Developer</h1>
        <p>Hello it's me mario!</p>
        <div className='flex gap-2'>
            <button className='bg-blue-300 rounded-2xl px-2 py-1'>Explore Projects</button>
            <button className='bg-amber-100 text-black rounded-2xl px-2 py-1'>Let's Connect</button>
        </div>
    </div>
  )
}

// task
// 1. Create a Hero component with a title, description, and two buttons (Explore Projects and Let's Connect).

export default Hero