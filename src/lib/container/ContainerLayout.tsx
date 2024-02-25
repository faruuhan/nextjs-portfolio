"use client";
import Sidebar from "@/lib/components/Sidebar";
import LoadingBar from "react-top-loading-bar";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/utils/redux/store";
import { handleLoandingBar } from "@/utils/redux/actions/storeSlice";

export default function ContainerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loadingBar = useSelector(
    (state: RootState) => state.storeSlice.loadingBar
  );
  const showSidebar = useSelector(
    (state: RootState) => state.storeSlice.showSidebar
  );
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <LoadingBar
        color='black'
        progress={loadingBar}
        height={4}
        shadow
        onLoaderFinished={() => dispatch(handleLoandingBar(0))}
      />
      <div className='relative'>
        <div className='fixed m-auto left-0 right-0 -top-[720px] -z-10 filter opacity-70 bg-gradient-to-b from-lime-300 to-white blur-2xl rounded-full w-[90%] h-[1024px]'></div>
        <div className='fixed w-72 h-72 bg-lime-200 opacity-0 filter blur-2xl rounded-full -z-10 left-64 bottom-36 animate-move'></div>
        <div className='lg:mx-auto relative lg:w-[1024px] flex flex-col min-h-screen lg:flex-row lg:gap-5'>
          <div
            className={`${
              showSidebar
                ? "bg-stone-800/60 backdrop-blur-[1px] visible"
                : "invisible lg:visible"
            } lg:bg-transparent w-full absolute z-10 h-full lg:z-0 lg:h-auto lg:static lg:w-3/12 lg:min-w-[25%] lg:block lg:my-10`}
          >
            <Sidebar />
          </div>
          <div className='px-4 py-4 lg:pt-0 lg:px-0 w-full lg:w-9/12 lg:my-10'>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
