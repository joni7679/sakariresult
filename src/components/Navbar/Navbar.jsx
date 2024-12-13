import React from 'react'
import logo from '../../assets/imges/logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <header className="p-7 bg-white shadow-lg  items-center ">
                <div className="container flex justify-between h-16 mx-auto">
                    <div className="logo">
                        <img src={logo} alt="" className='h-20 object-cover' />
                    </div>
                    <ul className="flex items-center gap-2 space-x-3 ">
                        <li className="flex">
                            <Link to={'/'} className='capitalize' href="">home</Link>
                        </li>
                        <li className="flex">
                            <Link to={`/latesjobs`} className='capitalize' href="">latest jobs</Link>
                        </li>
                        <li className="flex">
                            <Link to={'/result'} className='capitalize' href="">results</Link>
                        </li>
                        <li className="flex">
                            <Link to={`/admitcard`} className='capitalize' href="">admit card</Link>
                        </li>
                        <li className="flex">
                            <Link to={`/anskey`} className='capitalize' href="">answer key</Link>
                        </li>
                        <li className="flex">
                            <Link to={`/syllabus`} className='capitalize' href="">syllabus</Link>
                        </li>
                        <li className="flex">
                            <a className='capitalize' href="">search</a>
                        </li>
                        <li className="flex">
                            <a className='capitalize' href="">contact us</a>
                        </li>
                    </ul>

                </div>
            </header>

        </>
    )
}
