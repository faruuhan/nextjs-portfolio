import Link from "next/link";

export default function Sidebar(): JSX.Element {
  return (
    <>
      <nav className='flex flex-col mt-4 gap-y-1'>
        <Link href='/'>
          <div className='py-3 hover:bg-zinc-200 rounded-lg px-4'>Home</div>
        </Link>
        <Link href='/'>
          <div className='py-3 hover:bg-zinc-200 rounded-lg px-4'>About</div>
        </Link>
        <Link href='/'>
          <div className='py-3 hover:bg-zinc-200 rounded-lg px-4'>Project</div>
        </Link>
        <Link href='/'>
          <div className='py-3 hover:bg-zinc-200 rounded-lg px-4'>Contact</div>
        </Link>
      </nav>
    </>
  );
}
