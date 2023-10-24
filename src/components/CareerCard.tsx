import dayjs from "dayjs";
import Image from "next/image";
import bgn from "@/static/images/bgn.png";
import { Career } from "@/utils/interface";

export default function CareerCard({
  position,
  company,
  start,
  end,
  location,
}: Career): JSX.Element {
  const getDurationCareer = (start: string, end: string) => {
    let monthRemaining: number = end
      ? dayjs(end).diff(start, "month")
      : dayjs().diff(start, "month");
    let countYear: number = 0;

    while (monthRemaining - 12 >= 0) {
      monthRemaining -= 12;
      countYear++;
    }

    if (countYear === 0) {
      return `${monthRemaining} Month`;
    }
    return `${countYear} Years ${monthRemaining} Months`;
  };
  return (
    <>
      <div className='rounded-lg border border-zinc-300 py-4 px-6 flex items-center gap-5'>
        <div>
          <Image
            src={bgn}
            width={40}
            height={40}
            alt='bgn'
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
          <span className='text-zinc-500 text-sm'>
            ~ {getDurationCareer(start, end)}
          </span>
        </div>
      </div>
    </>
  );
}
