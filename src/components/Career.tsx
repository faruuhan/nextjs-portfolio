import Image from "next/image";
import bgn from "@/static/images/bgn.png";

export default function Career() {
  return (
    <>
      <section className='space-y-6'>
        <div className='space-y-2'>
          <div className='flex gap-2 items-center'>
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
                d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21'
              />
            </svg>

            <h3 className='capitalize font-semibold text-xl'>Career</h3>
          </div>
          <p className='text-zinc-500'>Professional career journey.</p>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='rounded-lg border border-zinc-300 py-4 px-6 flex items-center gap-5'>
            <div>
              <Image src={bgn} width={40} height={40} alt='bgn' />
            </div>
            <div className='space-y-1'>
              <h6 className='text-base font-medium'>Software Engineer</h6>
              <div className='flex gap-2'>
                <span className='text-zinc-500 text-sm'>BiznetGio.com</span>
                <span className='text-zinc-300 text-sm'>•</span>
                <span className='text-zinc-500 text-sm'>Jakarta</span>
              </div>
              <div className='flex gap-2'>
                <span className='text-zinc-500 text-sm'>Nov 2022</span>
                <span className='text-zinc-300 text-sm'>-</span>
                <span className='text-zinc-500 text-sm'>Present</span>
              </div>
              <span className='text-zinc-500 text-sm'>~ 11 Months</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
