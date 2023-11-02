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
      <section className='lg:sticky lg:top-10'>
        <CardProfile data={profile} />
        <NavMenu />
        <CardSpotify />
        <h4 className='text-zinc-500 text-sm text-center mt-4'>
          ©2023 with ❤️ by <span className='font-semibold'>ファルハン</span>
        </h4>
      </section>
    </>
  );
}
