import React from 'react'
import LogoImg from '../../assets/img.png'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <>
   <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] bg-opacity-95 backdrop-blur-xl border-b border-neutral-800 selection:bg-orange-500 selection:text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl  flex items-center justify-center text-white font-bold text-xl">
          <img src={LogoImg} className="w-full h-full object-cover" alt="Photography Logo" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">عدسة</span>
          <span className="text-xs text-orange-400/80 sm:block ">عالم التصوير الفوتوغرافي</span>
        </div>
      </div>
      <div className=" md:flex items-center gap-1 bg-[#161616] p-1.5 rounded-full border border-[#262626]">
        <NavLink to='/' className="px-5 py-2.5 rounded-full text-sm font-medium text-neutral-400 hover:text-white">الرئيسية</NavLink>
        <NavLink to='/blog' className="px-5 py-2.5 rounded-full text-sm font-medium text-neutral-400 hover:text-white">المدونة</NavLink>
        <NavLink to='/about' className="px-5 py-2.5 rounded-full text-sm font-medium text-neutral-400 hover:text-white">من نحن</NavLink>

      </div>
      <div className=" md:flex items-center gap-3">
        <button className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <Link to="/blog" className="bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-transform duration-300 hover:-translate-y-1">ابدأ القراءة</Link>
      </div>
    </div>
  </div>
</nav>


    </>
  )
}