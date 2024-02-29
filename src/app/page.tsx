"use client";
import React, { useEffect, useState } from "react";
import CardCareer from "@/lib/components/CardCareer";
import SkillList from "@/lib/components/SkillList";
import CardProject from "@/lib/components/CardProject";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/utils/redux/store";
import { handleLoandingBar } from "@/utils/redux/actions/storeSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  BriefcaseIcon,
  CodeBracketIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <BriefcaseIcon className='w-6 h-6' />
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
              <CodeBracketIcon className='w-6 h-6' />

              <h3 className='capitalize font-semibold text-xl'>Skills</h3>
            </div>
            <p className='text-zinc-500'>My profesional skills.</p>
          </div>
          <div className='flex flex-wrap justify-center gap-2'>
            {skills.map((skill, index) => (
              <SkillList key={index} title={skill} />
            ))}
          </div>
        </section>
        <div className='border-t border-zinc-300 my-6'></div>
        <section className='space-y-6'>
          <div className='space-y-2'>
            <div className='flex gap-2 items-center'>
              <BookmarkIcon className='w-6 h-6' />

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
