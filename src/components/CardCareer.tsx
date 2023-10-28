import dayjs from "dayjs";
import Image from "next/image";
import { useCountDurationCareer } from "@/utils/hook/useCountDurationCareer";

interface Career {
  data: {
    image: string;
    position: string;
    company: string;
    start: string;
    end: string;
    location: string;
  };
}

export default function CareerCard(props: Career): JSX.Element {
  const { image, position, company, start, end, location } = props.data;
  const durationCareer = useCountDurationCareer(start, end);

  return (
    <>
      <div className='rounded-lg border bg-white border-zinc-300 py-4 px-6 flex items-center gap-5'>
        <div>
          <Image
            src={
              `https://res.cloudinary.com/dngppnrwo/image/upload/v1698297816/web/company` +
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
          <h6 className='text-base font-medium'>{position}</h6>
          <div className='flex gap-2'>
            <span className='text-zinc-500 text-sm'>{company}</span>
            <span className='text-zinc-300 text-sm'>•</span>
            <span className='text-zinc-500 text-sm'>{location}</span>
          </div>
          <div className='flex gap-2'>
            <span className='text-zinc-500 text-sm'>
              {dayjs(start).format("MMM YYYY")}
            </span>
            <span className='text-zinc-300 text-sm'>-</span>
            <span className='text-zinc-500 text-sm'>
              {end ? dayjs(end).format("MMM YYYY") : "Present"}
            </span>
          </div>
          <span className='text-zinc-500 text-sm'>~ {durationCareer}</span>
        </div>
      </div>
    </>
  );
}
