"use client";
import Image from "next/image";
import marsha from "@/static/images/marsha.jpg";
import profile from "@/static/images/profile.jpeg";
import { useState } from "react";

interface DataProfile {
  fullName: string;
  userName: string;
  bio: string;
}

export default function CardProfile(): JSX.Element {
  const [dataProfile, setDataProfile] = useState<DataProfile>({
    fullName: "Farhan Ramadhan",
    userName: "@faruuhan",
    bio: "Software Engineer",
  });
  return (
    <>
      <div className='relative'>
        <Image
          src={marsha}
          className='w-full h-32 object-cover rounded-lg'
          alt='bg marsha'
        />
        <Image
          src={profile}
          className='border-2 border-white rounded-full h-20 w-20 absolute -bottom-8 left-4 drop-shadow-md'
          alt='profile'
        />
      </div>
      <div className='pt-9 px-4'>
        <h3 className='font-medium text-lg'>{dataProfile.fullName}</h3>
        <p className='text-zinc-500'>{dataProfile.userName}</p>

        <p className='mt-2'>{dataProfile.bio}</p>
      </div>
    </>
  );
}
