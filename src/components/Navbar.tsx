"use client";
import { useDispatch, useSelector } from "react-redux";
import { handleSidebar } from "@/utils/redux/actions/storeSlice";
import { RootState, AppDispatch } from "@/utils/redux/store";

export default function Navbar(): JSX.Element {
  const showSidebar = useSelector(
    (state: RootState) => state.storeSlice.showSidebar
  );
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <nav className='flex justify-between items-center px-4 py-4 bg-white sticky top-0 drop-shadow-md lg:hidden z-20'>
        <h1 className='font-medium'>ファルハン</h1>
        <button
          className='border rounded-md p-2 hover:bg-zinc-200'
          onClick={() => dispatch(handleSidebar(showSidebar ? false : true))}
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
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </button>
      </nav>
    </>
  );
}
