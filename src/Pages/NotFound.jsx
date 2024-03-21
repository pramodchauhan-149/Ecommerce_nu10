import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='text-5xl flex flex-col h-[80vh] justify-center items-center'>
        404 : Page not found console.error
        <br/>
        <Link to='/' className='text-2xl text-cyan-600'>Take me to Home page</Link>
    </div>
  )
}

// npm i