import React from 'react'
import MenuItem from './MenuItem'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 mx-auto'>

        <div className='flex gap-4 '>
            <MenuItem title='Home' address='/'  />
            <MenuItem title='Sobre' address='/about'  />
        </div>

        <Link href={'/'} className='flex'>
            <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>Cinemateca</span>
        </Link>

    </div>
  )
}
