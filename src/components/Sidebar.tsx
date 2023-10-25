import NavMenu from "@/components/NavMenu";
import CardProfile from "@/components/CardProfile";

export default function Sidebar(): JSX.Element {
  return (
    <>
      <div
        className='w-full bg-white h-full absolute z-10 lg:static ease-in-out duration-500 lg:duration-0 -translate-x-[120%] lg:translate-x-0 lg:w-3/12 lg:block'
        id='sidebar'
      >
        <section className='sticky top-0 lg:top-10'>
          <CardProfile />
          <NavMenu />
          <h4 className='text-zinc-500 text-center'>
            ©2023 with ❤️ by <span className='font-semibold'>ファルハン</span>
          </h4>
        </section>
      </div>
    </>
  );
}
