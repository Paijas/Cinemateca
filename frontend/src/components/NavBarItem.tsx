'use client'

import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'


interface NavBarItemProps {
  title: string
  param: string
}

export default function NavBarItem(props: NavBarItemProps) {

  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');

  return (
    <div>
        <Link 
             
        className={`hover:text-amber-500 font-semibold ${genre === props.param ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg' : ''}`}
        href={`/?genre=${props.param}`} 
        >
            {props.title}
        </Link>
    </div>
  )
}
