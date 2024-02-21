'use client';

import Link from 'next/link'
import React from 'react'
import {AiFillBug} from 'react-icons/ai'
import { usePathname } from 'next/navigation'
import classNames from 'classnames';

const NavBar = () => {
  const pathName=usePathname();
  const links=[{label:'Dashboard',href:'/'},{label:'Issues',href:'/issues'}]

  return (
    <nav className='flex space-x-6 items-center px-5 border-b mb-5 h-14'>
        <Link href='/'><AiFillBug/></Link>
        <ul className='flex space-x-6'>
        {links.map(link => 
          <Link 
            key={link.href} 
            className={classNames({'text-zinc-900':link.href===pathName,'text-zinc-500':link.href!==pathName,
             'hover:text-zinc-800 transition-colors':true})} 
            href={link.href}>{link.label}</Link>)}
        </ul>
    </nav>
  )
}

export default NavBar