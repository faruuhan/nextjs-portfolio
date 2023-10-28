"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/redux/store";
import CardProject from "@/components/CardProject";

export default function Project(): JSX.Element {
  const projects = useSelector((state: RootState) => state.storeSlice.projects);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <div className='animate-slide-up'>
        <section className='space-y-6'>
          <div className='space-y-2 pb-6 border-b border-zinc-300 border-dashed'>
            <h3 className='font-semibold text-2xl'>Projects</h3>
            <p className='text-zinc-500'>
              Some personal projects that I am working on.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {projects.map((project, index) => (
              <CardProject key={index} data={project} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
