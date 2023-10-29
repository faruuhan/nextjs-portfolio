"use client";
import React, { useEffect, useState } from "react";
import CardCareer from "@/components/CardCareer";
import SkillList from "@/components/SkillList";
import CardProject from "@/components/CardProject";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/utils/redux/store";
import { handleLoandingBar } from "@/utils/redux/actions/storeSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const career = useSelector((state: RootState) => state.storeSlice.career);
  const skills = useSelector((state: RootState) => state.storeSlice.skills);
  const projects = useSelector((state: RootState) => state.storeSlice.projects);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 1000);
    window.scrollTo({ top: 0 });
    dispatch(handleLoandingBar(100));
  }, []);

  return (
    <>
      <div className='animate-slide-up'>
        <section className='space-y-6'>
          <h3 className='font-semibold text-2xl'>Hi, I&apos;m Farhan</h3>
          <p>
            Information management graduates are passionate about programming.
            has experience as a Frontend Engineer for a year, especially in web
            development. Able to create web applications using modern JavaScript
            technology such as Vue/React and have basic skills on the Backend
            side with PHP/NodeJS technology.
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
                  d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'
                />
              </svg>
              <h3 className='capitalize font-semibold text-xl'>Career</h3>
            </div>
            <p className='text-zinc-500'>Professional career journey.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            {career.map((career, index) => (
              <CardCareer key={index} data={career} />
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
            {skills.map((skill, index) => (
              <SkillList key={index} title={skill} />
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
                  d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
                />
              </svg>

              <h3 className='capitalize font-semibold text-xl'>Projects</h3>
            </div>
            <p className='text-zinc-500'>
              Some personal projects that I am working on.
            </p>
          </div>
          {!isLoading && (
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
              grabCursor
              className='mySwiper'
            >
              {projects
                .map((project, index) => (
                  <SwiperSlide key={index}>
                    <CardProject data={project} />
                  </SwiperSlide>
                ))
                .slice(0, 4)}
            </Swiper>
          )}
        </section>
      </div>
    </>
  );
}
