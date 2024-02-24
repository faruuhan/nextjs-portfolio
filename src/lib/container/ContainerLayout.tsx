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
      <div className='lg:mx-auto relative lg:w-[1024px] flex flex-col min-h-screen lg:flex-row lg:gap-5'>
        <div
          className={`${
            showSidebar
              ? "bg-stone-800/60 backdrop-blur-[1px] visible"
              : "invisible lg:visible"
          } lg:bg-transparent w-full absolute z-10 h-full lg:h-auto lg:static lg:w-3/12 lg:min-w-[25%] lg:block lg:my-10`}
          id='sidebarParent'
        >
          <Sidebar />
        </div>
        <div className='px-4 py-4 lg:pt-0 lg:px-0 w-full lg:w-9/12 lg:my-10'>
          {children}
        </div>
      </div>
    </>
  );
}
