"use client";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { handleSidebar } from "@/utils/redux/actions/storeSlice";
import { AppDispatch } from "@/utils/redux/store";
import { usePathname } from "next/navigation";

export default function NavMenu(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const pathname = usePathname();

  return (
    <>
      <nav className='flex flex-col gap-y-1'>
        <div className='border-t border-zinc-300 my-4'></div>
        <Link href='/'>
          <div
            className={`transition duration-300 ease-in-out py-2 flex gap-2 hover:bg-zinc-100 rounded-lg px-4 hover:scale-105 ${
              pathname === "/" && "bg-zinc-100"
            }`}
            onClick={() => dispatch(handleSidebar(false))}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
              />
            </svg>
            Home
          </div>
        </Link>
        <Link href='/about'>
          <div
            className={`transition duration-300 ease-in-out py-2 flex gap-2 hover:bg-zinc-100 rounded-lg px-4 hover:scale-105 ${
              pathname === "/about" && "bg-zinc-100"
            }`}
            onClick={() => dispatch(handleSidebar(false))}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
              />
            </svg>
            About
          </div>
        </Link>
        <Link href='/projects'>
          <div
            className={`transition duration-300 ease-in-out py-2 flex gap-2 hover:bg-zinc-100 rounded-lg px-4 hover:scale-105 ${
              pathname === "/projects" && "bg-zinc-100"
            }`}
            onClick={() => dispatch(handleSidebar(false))}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z'
              />
            </svg>
            Projects
          </div>
        </Link>
        <Link href='/contact' onClick={() => dispatch(handleSidebar(false))}>
          <div
            className={`transition duration-300 ease-in-out py-2 flex gap-2 hover:bg-zinc-100 rounded-lg px-4 hover:scale-105 ${
              pathname === "/contact" && "bg-zinc-100"
            }`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
              />
            </svg>
            Contact
          </div>
        </Link>
        <div className='border-b border-zinc-300 my-4'></div>
      </nav>
    </>
  );
}
