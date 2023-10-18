import Image from "next/image";
import NavMenu from "@/components/NavMenu";
import CardProfile from "@/components/CardProfile";

export default function Sidebar(): JSX.Element {
  return (
    <>
      <CardProfile />
      <NavMenu />
      <h4 className='text-zinc-500'>©2023 made with ❤️ by faruuhan</h4>
    </>
  );
}
