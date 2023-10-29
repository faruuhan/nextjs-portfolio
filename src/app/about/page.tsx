"use client";
import { useEffect } from "react";
import CardEducation from "@/components/CardEducation";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/utils/redux/store";
import { handleLoandingBar } from "@/utils/redux/actions/storeSlice";

export default function About() {
  const education = useSelector(
    (state: RootState) => state.storeSlice.education
  );
  const dispatch = useDispatch<AppDispatch>();

  dispatch(handleLoandingBar(100));

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <div className='animate-slide-up'>
        <section className='space-y-6'>
          <div className='space-y-2 pb-6 border-b border-zinc-300 border-dashed'>
            <h3 className='font-semibold text-2xl'>About</h3>
            <p className='text-zinc-500'>A short story about me.</p>
          </div>
          <div className='space-y-4'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
              velit! Doloremque maxime nihil quaerat explicabo magni hic
              blanditiis soluta autem similique ex veniam, reiciendis dolor quos
              eveniet deleniti vitae quasi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              eligendi dolor eius voluptatum, ratione repudiandae provident ad
              quo aut eaque rem minus iure quisquam! Nulla officia fugit eius
              nihil quia.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              eveniet tempore porro ipsum vel! Alias sequi obcaecati excepturi
              ex dignissimos commodi, illum nam suscipit quo neque quibusdam
              amet sed ad fugiat non dolor libero fuga accusamus dolores
              voluptas deserunt dolorem iste perferendis. Itaque iste eum nemo,
              illo non repudiandae quia!
            </p>
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
                  d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
                />
              </svg>

              <h3 className='capitalize font-semibold text-xl'>Education</h3>
            </div>
            <p className='text-zinc-500'>My educational journey.</p>
          </div>
          <div className='grid grid-cols-1 gap-2'>
            {education.map((education, index) => (
              <CardEducation key={index} data={education} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
