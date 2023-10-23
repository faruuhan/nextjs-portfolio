"use client";
import React, { useState } from "react";
import CareerCard from "@/components/CareerCard";
import SkillList from "@/components/SkillList";
import Projects from "@/components/Projects";

export default function Home() {
  const [dataSkill, setDataSkill] = useState<string[]>([
    "JavaScript",
    "TypeScript",
    "React",
    "Next",
    "Vue",
    "Nuxt",
    "HTML",
    "CSS",
    "SASS",
    "Tailwind",
    "Bootstrap",
    "PHP",
    "CodeIgniter",
    "Laravel",
    "MySql",
    "Express",
    "NodeJS",
  ]);

  const [dataCareer, setDataCareer] = useState<any[]>([
    {
      company: "BiznetGio.com",
      position: "Software Enginner",
      start: "7 November 2022",
      end: "",
      location: "Jakarta",
    },
  ]);

  return (
    <>
      <section className=''>
        <h3 className='font-semibold text-2xl'>Hi, I'm Farhan</h3>
        <p className='mt-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          repellendus quia sint incidunt deserunt repellat non dolores, illo
          consequatur fugit corrupti error dolorum possimus blanditiis nam
          nobis! Repellendus, iure optio.
        </p>
      </section>
      <div className='border-t border-zinc-300 my-6'></div>
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
        <div className='grid grid-cols-2 gap-2'>
          {dataCareer.map((career, index) => (
            <CareerCard key={index} data={career} />
          ))}
        </div>
      </section>
      <div className='border-t border-zinc-300 my-6'></div>
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
                d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
              />
            </svg>

            <h3 className='capitalize font-semibold text-xl'>Skills</h3>
          </div>
          <p className='text-zinc-500'>My profesional skills.</p>
        </div>
        <div className='flex flex-wrap gap-2'>
          {dataSkill.map((skill, index) => (
            <SkillList key={index} title={skill} />
          ))}
        </div>
      </section>
      <div className='border-t border-zinc-300 my-6'></div>
      <Projects />
    </>
  );
}
