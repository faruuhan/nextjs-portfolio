import Image from "next/image";
import IconTechStack from "./IconTechStack";
import { SiGithub } from "@icons-pack/react-simple-icons";

interface Project {
  data: {
    image: string;
    title: string;
    desc: string;
    techStack: string[];
    urlRepositories: string;
  };
}

export default function CardProject(props: Project): JSX.Element {
  const { image, title, desc, techStack, urlRepositories } = props.data;

  return (
    <>
      <div className='rounded-xl overflow-hidden border border-zinc-300 animate-zoom-in group'>
        <div className='h-[200px] relative'>
          <Image
            src={
              `https://res.cloudinary.com/dngppnrwo/image/upload/v1698297774/web/projects` +
              image
            }
            fill
            alt={image}
            style={{ objectFit: "cover" }}
            sizes='100%'
            loading='lazy'
            blurDataURL={
              `https://res.cloudinary.com/dngppnrwo/image/upload/v1698297774/web/projects` +
              image
            }
            placeholder='blur'
          />
          <div className='bg-black/70 w-full h-full absolute top-0 left-0 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:ease-in-out flex justify-center items-center z-20'>
            <a href={urlRepositories} target='_blank' rel='noopener noreferrer'>
              <SiGithub size={35} color='white' title='GitHub Repositories' />
            </a>
          </div>
        </div>
        <div className='px-6 py-5 h-40 flex flex-col bg-white'>
          <a
            href='http://'
            target='_blank'
            rel='noopener noreferrer'
            className='font-medium group-hover:text-emerald-500'
          >
            {title}
          </a>
          <div className='grow mt-3'>
            <p className='text-zinc-500'>{desc}</p>
          </div>
          <div className='mt-auto flex gap-2'>
            {techStack.map((stack, index) => (
              <IconTechStack stack={stack} size={22} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
