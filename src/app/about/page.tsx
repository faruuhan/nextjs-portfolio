"use client";
import { useEffect } from "react";
import CardEducation from "@/lib/components/CardEducation";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/utils/redux/store";
import { handleLoandingBar } from "@/utils/redux/actions/storeSlice";
import { AcademicCapIcon, DocumentIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import CardCertificate from "@/lib/components/CardCertificate";

export default function About() {
  const education = useSelector(
    (state: RootState) => state.storeSlice.education
  );
  const certificate = useSelector(
    (state: RootState) => state.storeSlice.certificate
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch(handleLoandingBar(100));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <AcademicCapIcon className='h-6 w-6' />

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
        <div className='border-t border-zinc-300 my-6'></div>
        <section className='space-y-6'>
          <div className='space-y-2'>
            <div className='flex gap-2 items-center'>
              <DocumentIcon className='h-6 w-6' />

              <h3 className='capitalize font-semibold text-xl'>Certificate</h3>
            </div>
            <p className='text-zinc-500'>My educational journey.</p>
          </div>
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            autoplay
            pagination
            grabCursor
            className='mySwiper'
          >
            {certificate.map((certificate, index) => (
              <SwiperSlide key={index}>
                <CardCertificate data={certificate} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          </div> */}
        </section>
      </div>
    </>
  );
}
