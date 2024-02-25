"use client";
import NavMenu from "@/lib/components/NavMenu";
import CardProfile from "@/lib/components/CardProfile";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/redux/store";
import CardSpotify from "@/lib/components/CardSpotify";

export default function Sidebar(): JSX.Element {
  const profile = useSelector((state: RootState) => state.storeSlice.profile);
  return (
    <>
      <section
        className='px-4 py-4 min-h-full bg-white ease-in-out duration-500 md:w-2/5 lg:duration-0 -translate-x-[120%] lg:translate-x-0 lg:px-0 lg:pt-0 lg:w-full'
        id='sidebar'
      >
        <div className='lg:sticky lg:top-10'>
          <CardProfile data={profile} />
          <NavMenu />
          <CardSpotify />
          <h4 className='text-zinc-500 text-sm text-center mt-4'>
            ©2023 with ❤️ by <span className='font-semibold'>ファルハン</span>
          </h4>
          <h4 className='text-zinc-500 text-xs text-center mt-1'>
            Build with <span className='font-semibold italic'>Next.js</span> &{" "}
            <span className='font-semibold italic'>Tailwind</span>
          </h4>
        </div>
      </section>
    </>
  );
}
