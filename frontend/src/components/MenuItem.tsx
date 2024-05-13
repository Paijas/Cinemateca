import Link from 'next/link'
import React from 'react'
import { AiFillHome } from'react-icons/ai'
import { BsFillInfoCircleFill } from'react-icons/bs'

interface MenuItemProps {
  title: string
  address: string
 
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link href={props.address} className='hover:text-amber-500'>
      <p className='uppercase text-sm'>{props.title}</p>
    </Link>
  )
}
 