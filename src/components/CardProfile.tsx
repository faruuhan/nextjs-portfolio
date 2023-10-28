"use client";
import Image from "next/image";

interface Profile {
  data: {
    sampulImage: string;
    profileImage: string;
    fullName: string;
    username: string;
    bio: string;
  };
}

export default function CardProfile(props: Profile): JSX.Element {
  const { sampulImage, profileImage, fullName, username, bio } = props.data;
  return (
    <>
      <div className='relative'>
        <div className='w-full h-40 md:h-52 lg:h-32 relative overflow-hidden rounded-lg'>
          <Image
            src={
              `https://res.cloudinary.com/dngppnrwo/image/upload/v1698297803/web/profile` +
              sampulImage
            }
            fill
            alt='bg marsha'
            sizes='100%'
            style={{
              objectFit: "cover",
            }}
            loading='lazy'
            blurDataURL={
              `https://res.cloudinary.com/dngppnrwo/image/upload/v1698297803/web/profile` +
              sampulImage
            }
            placeholder='blur'
          />
        </div>
        <div className='border-2 border-white rounded-full w-20 h-20 absolute -bottom-8 left-4 drop-shadow-md overflow-hidden'>
          <Image
            src={
              `https://res.cloudinary.com/dngppnrwo/image/upload/v1698297803/web/profile` +
              profileImage
            }
            fill
            alt='profile'
            sizes='100%'
            loading='lazy'
            blurDataURL={
              `https://res.cloudinary.com/dngppnrwo/image/upload/v1698297803/web/profile` +
              profileImage
            }
            placeholder='blur'
          />
        </div>
      </div>
      <div className='pt-9 px-4'>
        <h3 className='font-medium text-lg'>{fullName}</h3>
        <p className='text-zinc-500'>@{username}</p>

        <p className='mt-2'>{bio}</p>
      </div>
    </>
  );
}
