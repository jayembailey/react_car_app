import React from 'react'
import Background from '../assets/images/camaro.jpg'

const Home = () => {
  return (
    <div style={{backgroundImage:`url(${ Background })`}}
    className='flex flex-row justify-center mx-auto-bg-fixed bg-cover'>
      <div className='flex place-items-center h-screen'>
        <h3 className='p-5 bg-teal-300 bg-opacity-70 text-red-600'>Welcome to the Garage</h3>
      </div>
    </div>
  )
}

export default Home
