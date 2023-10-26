import NavMenu from "@/components/NavMenu";
import CardProfile from "@/components/CardProfile";

export default function Sidebar(): JSX.Element {
  return (
    <>
      <section className='sticky top-0 lg:top-10'>
        <CardProfile />
        <NavMenu />
        <h4 className='text-zinc-500 text-center'>
          ©2023 with ❤️ by <span className='font-semibold'>ファルハン</span>
        </h4>
      </section>
    </>
  );
}
