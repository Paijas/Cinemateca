import React from 'react'
import NavBarItem from './NavBarItem'
export default function NavBar() {
  return (
    <div className='flex  bg-gray-600 p-4 justify-center items-center gap-10'>
        <NavBarItem title="Destaques" param="fetchTreding"/>
        <NavBarItem title="Aclamados" param="fetchTopRated"/>
        
    </div>
  )
}
