import Image from "next/image";
import IconTechStack from "./IconTechStack";

interface Project {
  data: {
    image: string;
    title: string;
    desc: string;
    techStack: string[];
  };
}

export default function CardProject(props: Project): JSX.Element {
  const { image, title, desc, techStack } = props.data;

  return (
    <>
      <div className='rounded-xl overflow-hidden border border-zinc-300'>
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
        </div>
        <div className='px-6 py-5 h-40 flex flex-col bg-white'>
          <h3 className='font-medium'>{title}</h3>
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
