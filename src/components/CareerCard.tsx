import dayjs from "dayjs";
import Image from "next/image";
import bgn from "@/static/images/bgn.png";

interface Career {
  key: number;
  data: {
    position: string;
    company: string;
    start: string;
    end: string;
    location: string;
  };
}

export default function Career(props: Career) {
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
    return `${countYear} Year ${monthRemaining} Month`;
  };
  return (
    <>
      <div className='rounded-lg border border-zinc-300 py-4 px-6 flex items-center gap-5'>
        <div>
          <Image src={bgn} width={40} height={40} alt='bgn' />
        </div>
        <div className='space-y-1'>
          <h6 className='text-base font-medium'>{props.data.position}</h6>
          <div className='flex gap-2'>
            <span className='text-zinc-500 text-sm'>{props.data.company}</span>
            <span className='text-zinc-300 text-sm'>•</span>
            <span className='text-zinc-500 text-sm'>{props.data.location}</span>
          </div>
          <div className='flex gap-2'>
            <span className='text-zinc-500 text-sm'>
              {dayjs(props.data.start).format("MMM YY")}
            </span>
            <span className='text-zinc-300 text-sm'>-</span>
            <span className='text-zinc-500 text-sm'>
              {props.data.end
                ? dayjs(props.data.end).format("MMM YY")
                : "Present"}
            </span>
          </div>
          <span className='text-zinc-500 text-sm'>
            ~ {getDurationCareer(props.data.start, props.data.end)}
          </span>
        </div>
      </div>
    </>
  );
}
