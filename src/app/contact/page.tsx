"use client";
import {
  SiGmail,
  SiInstagram,
  SiTwitter,
  SiGithub,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";

export default function Contact(): JSX.Element {
  return (
    <>
      <section className='space-y-6'>
        <div className='space-y-2 pb-6 border-b border-zinc-300 border-dashed'>
          <h3 className='font-semibold text-2xl'>Contact</h3>
          <p className='text-zinc-500'>Let&apos;s connect with me.</p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
          <a
            href='mailto:farhnn.r@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='rounded-md bg-[#EA4335] text-white py-2 px-5 flex items-center justify-center gap-2'>
              <SiGmail color='white' size={20} />
              Gmail
            </div>
          </a>
          <a
            href='https://www.linkedin.com/in/faruuhan/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='rounded-md bg-[#0A66C2] text-white py-2 px-5 flex items-center justify-center gap-2'>
              <SiLinkedin color='white' size={20} />
              Linkedin
            </div>
          </a>
          <a
            href='https://www.instagram.com/faruuhan/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='rounded-md bg-[#E4405F] text-white py-2 px-5 flex items-center justify-center gap-2'>
              <SiInstagram color='white' size={20} />
              Instagram
            </div>
          </a>
          <a
            href='https://twitter.com/faruuhan'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='rounded-md bg-[#1D9BF0] text-white py-2 px-5 flex items-center justify-center gap-2'>
              <SiTwitter color='white' size={20} />
              Twitter
            </div>
          </a>
          <a
            href='https://github.com/faruuhan'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='rounded-md bg-[#181717] text-white py-2 px-5 flex items-center justify-center gap-2'>
              <SiGithub color='white' size={20} />
              Github
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
