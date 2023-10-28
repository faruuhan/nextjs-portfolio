import Sidebar from "@/components/Sidebar";

export default function GridLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='mx-4 pt-4 lg:pt-0 lg:mx-auto relative lg:w-[1024px] flex flex-col min-h-screen lg:flex-row lg:gap-5 lg:my-10'>
        <div
          className='w-full bg-white lg:bg-transparent absolute z-10 h-full lg:h-auto lg:static ease-in-out duration-500 lg:duration-0 -translate-x-[120%] lg:translate-x-0 lg:w-3/12 lg:block'
          id='sidebar'
        >
          <Sidebar />
        </div>
        <div className='w-full lg:w-9/12'>{children}</div>
      </div>
    </>
  );
}
