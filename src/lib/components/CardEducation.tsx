import Image from "next/image";

interface Education {
  data: {
    image: string;
    school: string;
    title: string;
    start: string;
    end: string;
    major: string;
  };
}

export default function CardEducation(props: Education): JSX.Element {
  const { image, school, title, start, end, major } = props.data;
  return (
    <>
      <div className='rounded-lg border bg-white border-zinc-300 py-4 px-6 flex items-center gap-5'>
        <div>
          <Image
            src={
              `https://res.cloudinary.com/dngppnrwo/image/upload/v1698365074/web/education` +
              image
            }
            width={40}
            height={40}
            alt={image}
            loading='lazy'
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className='space-y-1'>
          <h6 className='text-base font-medium'>{school}</h6>
          <div className='flex md:items-center flex-col md:flex-row md:gap-2'>
            <span className='text-zinc-500 text-sm'>{title}</span>
            <span className='text-zinc-300 text-sm hidden md:block'>•</span>
            <span className='text-zinc-500 text-sm'>{major}</span>
          </div>
          <div className='flex gap-2'>
            <span className='text-zinc-500 text-sm'>{start}</span>
            <span className='text-zinc-300 text-sm'>-</span>
            <span className='text-zinc-500 text-sm'>{end}</span>
          </div>
        </div>
      </div>
    </>
  );
}
