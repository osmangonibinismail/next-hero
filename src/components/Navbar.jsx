"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const links = [
        {
            title: "about",
            path: '/about'
        },
        {
            title: "post",
            path: '/post'
        },
        {
            title: "Services",
            path: '/services'
        },
        {
            title: "Meals",
            path: '/meals'
        },
        {
            title: "Dashboard",
            path: '/dashboard'
        },
        {
            title: "Blogs",
            path: '/blogs'
        },
        {
            title: "Category",
            path: '/categories'
        },
        {
            title: "Gallery",
            path: '/gallery'
        },
    ]
    const handler = () => {
        router.push('/login')
    }
    if(pathName.includes('dashboard'))
        return (
    <div className='bg-green-500'>Dashboard layout</div>
        )
    return (
        <div>
            <nav className="bg-gray-400 px-6 py-4 flex justify-between items-center">
                <h6 className='text-3xl'>Next <span className='text-cyan-200'>hero</span></h6>
                <ul className='flex justify-between items-center space-x-4'>
                    {
                        links?.map((link) => <Link className={`${pathName === link.path && "text-cyan-400"}`} key={link.path} href={link.path}>{link.title}</Link>)
                    }
                </ul>
                <button onClick={handler} className='bg-white text-cyan-400 font-bold p-4'>log in</button>
            </nav>
        </div>
    )
}

export default Navbar
