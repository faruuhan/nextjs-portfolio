"use client";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  handleSidebar,
  handleLoandingBar,
} from "@/utils/redux/actions/storeSlice";
import { AppDispatch } from "@/utils/redux/store";
import { usePathname } from "next/navigation";
import {
  HomeIcon as HomeIconSolid,
  UserIcon as UserIconSolid,
  BookmarkIcon as BoorkmarkIconSolid,
  EnvelopeIcon as EvenlopeIconSolid,
} from "@heroicons/react/24/solid";
import {
  HomeIcon as HomeIconOutline,
  UserIcon as UserIconOutline,
  BookmarkIcon as BookmarkIconOutline,
  EnvelopeIcon as EvenlopeIconOutline,
} from "@heroicons/react/24/outline";

export default function NavMenu(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const pathname = usePathname();

  return (
    <>
      <nav className='flex flex-col gap-y-1'>
        <div className='border-t border-zinc-300 my-4'></div>
        <Link href='/'>
          <div
            className={`transition duration-300 ease-in-out py-2 flex gap-2 hover:font-semibold hover:bg-zinc-100 rounded-lg px-4 hover:scale-105 ${
              pathname === "/" && "bg-zinc-100 font-semibold"
            }`}
            onClick={() => {
              dispatch(handleSidebar(false));
              dispatch(handleLoandingBar(pathname === "/" ? 100 : 30));
            }}
          >
            {pathname === "/" ? (
              <HomeIconSolid className='h-6 w-6' />
            ) : (
              <HomeIconOutline className='h-6 w-6' />
            )}
            Home
          </div>
        </Link>
        <Link href='/about'>
          <div
            className={`transition duration-300 ease-in-out py-2 flex gap-2 hover:font-semibold hover:bg-zinc-100 rounded-lg px-4 hover:scale-105 ${
              pathname === "/about" && "bg-zinc-100 font-semibold"
            }`}
            onClick={() => {
              dispatch(handleSidebar(false));
              dispatch(handleLoandingBar(pathname === "/about" ? 100 : 30));
            }}
          >
            {pathname === "/about" ? (
              <UserIconSolid className='h-6 w-6' />
            ) : (
              <UserIconOutline className='h-6 w-6' />
            )}
            About
          </div>
        </Link>
        <Link href='/projects'>
          <div
            className={`transition duration-300 ease-in-out py-2 flex gap-2 hover:font-semibold hover:bg-zinc-100 rounded-lg px-4 hover:scale-105 ${
              pathname === "/projects" && "bg-zinc-100 font-semibold"
            }`}
            onClick={() => {
              dispatch(handleSidebar(false));
              dispatch(handleLoandingBar(pathname === "/projects" ? 100 : 30));
            }}
          >
            {pathname === "/projects" ? (
              <BoorkmarkIconSolid className='h-6 w-6' />
            ) : (
              <BookmarkIconOutline className='h-6 w-6' />
            )}
            Projects
          </div>
        </Link>
        <Link
          href='/contact'
          onClick={() => {
            dispatch(handleSidebar(false));
            dispatch(handleLoandingBar(pathname === "/contact" ? 100 : 30));
          }}
        >
          <div
            className={`transition duration-300 ease-in-out py-2 flex gap-2 hover:font-semibold hover:bg-zinc-100 rounded-lg px-4 hover:scale-105 ${
              pathname === "/contact" && "bg-zinc-100 font-semibold"
            }`}
          >
            {pathname === "/contact" ? (
              <EvenlopeIconSolid className='h-6 w-6' />
            ) : (
              <EvenlopeIconOutline className='h-6 w-6' />
            )}
            Contact
          </div>
        </Link>
        <div className='border-b border-zinc-300 my-4'></div>
      </nav>
    </>
  );
}
