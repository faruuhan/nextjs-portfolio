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
      <div className='mx-4 pt-4 lg:pt-0 lg:mx-auto relative lg:w-[1024px] flex flex-col min-h-screen lg:flex-row lg:gap-5'>
        <div
          className='w-full bg-white lg:bg-transparent absolute z-10 h-full lg:h-auto lg:static ease-in-out duration-500 lg:duration-0 -translate-x-[120%] lg:translate-x-0 lg:w-3/12 lg:min-w-[25%] lg:block lg:my-10'
          id='sidebar'
        >
          <Sidebar />
        </div>
        <div className='w-full lg:w-9/12 lg:my-10'>{children}</div>
      </div>
    </>
  );
}
