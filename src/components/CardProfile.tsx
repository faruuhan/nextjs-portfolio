"use client";
import Image from "next/image";
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
        <div className='w-full h-40 md:h-52 lg:h-32 relative overflow-hidden rounded-lg'>
          <Image
            src='https://res.cloudinary.com/dngppnrwo/image/upload/v1698297803/web/profile/marsha_cltbqq.jpg'
            fill
            alt='bg marsha'
            sizes='100%'
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className='border-2 border-white rounded-full w-20 h-20 absolute -bottom-8 left-4 drop-shadow-md overflow-hidden'>
          <Image
            src='https://res.cloudinary.com/dngppnrwo/image/upload/v1698297802/web/profile/profile_u9jqpt.jpg'
            fill
            alt='profile'
            loading='lazy'
            sizes='100%'
          />
        </div>
      </div>
      <div className='pt-9 px-4'>
        <h3 className='font-medium text-lg'>{dataProfile.fullName}</h3>
        <p className='text-zinc-500'>{dataProfile.userName}</p>

        <p className='mt-2'>{dataProfile.bio}</p>
      </div>
    </>
  );
}
