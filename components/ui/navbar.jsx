import React from 'react'
import Link from 'next/link'
import { Button } from './button'

function Navbar() {
  return (
    <nav className='m-auto p-4 w-full bg-gradient-to-r from-green-500 to-gray-900 flex flex-wrap justify-between items-center gap-2'>
      <h1 className='text-3xl font-bold'>Portfolio</h1>
      <div className='flex flex-wrap gap-2'>
        <Link href="/"><Button variant="ghost" className="text-gray-300">Home</Button></Link>
        <Link href="/About"><Button variant="ghost" className="text-gray-300">About</Button></Link>
        <Link href="/Service"><Button variant="ghost" className="text-gray-300">Service</Button></Link>
        <Link href="/Contact"><Button variant="ghost" className="text-gray-300">Contact</Button></Link>
      </div>
    </nav>
  )
}

export default Navbar
