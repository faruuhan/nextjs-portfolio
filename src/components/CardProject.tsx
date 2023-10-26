import Image from "next/image";
import {
  SiJavascript,
  SiJavascriptHex,
  SiTypescript,
  SiTypescriptHex,
  SiReact,
  SiReactHex,
  SiTailwindcss,
  SiTailwindcssHex,
  SiNextdotjs,
  SiNextdotjsHex,
  SiVuedotjs,
  SiVuedotjsHex,
  SiNuxtdotjs,
  SiNuxtdotjsHex,
  SiBootstrap,
  SiBootstrapHex,
} from "@icons-pack/react-simple-icons";

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

  const filterStack = (stack: string, index: number) => {
    switch (stack) {
      case "JavaScript":
        return (
          <SiJavascript
            key={index}
            title={stack}
            color={SiJavascriptHex}
            size={24}
          />
        );
      case "TypeScript":
        return (
          <SiTypescript
            key={index}
            title={stack}
            color={SiTypescriptHex}
            size={24}
          />
        );
      case "React":
        return (
          <SiReact key={index} title={stack} color={SiReactHex} size={24} />
        );
      case "Next":
        return (
          <SiNextdotjs
            key={index}
            title={stack}
            color={SiNextdotjsHex}
            size={24}
          />
        );
      case "Vue":
        return (
          <SiVuedotjs
            key={index}
            title={stack}
            color={SiVuedotjsHex}
            size={24}
          />
        );
      case "Nuxt":
        return (
          <SiNuxtdotjs
            key={index}
            title={stack}
            color={SiNuxtdotjsHex}
            size={24}
          />
        );
      case "Tailwind":
        return (
          <SiTailwindcss
            key={index}
            title={stack}
            color={SiTailwindcssHex}
            size={24}
          />
        );
      case "Bootstrap":
        return (
          <SiBootstrap
            key={index}
            title={stack}
            color={SiBootstrapHex}
            size={24}
          />
        );
    }
  };

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
            loading='lazy'
            alt='bringee'
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className='px-6 py-5 h-40 space-y-3'>
          <h3 className='font-medium capitalize'>{title}</h3>
          <p className='text-zinc-500'>{desc}</p>
          <div className='flex gap-2'>
            {techStack.map((stack, index) => filterStack(stack, index))}
          </div>
        </div>
      </div>
    </>
  );
}
