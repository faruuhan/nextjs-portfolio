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
import bringeee from "@/static/images/projects/bringeee.png";

interface Project {
  data: {
    title: string;
    desc: string;
    techStack: string[];
  };
}

export default function CardProject(props: Project): JSX.Element {
  const { data } = props;

  const filterStack = (stack: string) => {
    switch (stack) {
      case "JavaScript":
        return <SiJavascript title={stack} color={SiJavascriptHex} size={24} />;
      case "TypeScript":
        return <SiTypescript title={stack} color={SiTypescriptHex} size={24} />;
      case "React":
        return <SiReact title={stack} color={SiReactHex} size={24} />;
      case "Next":
        return <SiNextdotjs title={stack} color={SiNextdotjsHex} size={24} />;
      case "Vue":
        return <SiVuedotjs title={stack} color={SiVuedotjsHex} size={24} />;
      case "Nuxt":
        return <SiNuxtdotjs title={stack} color={SiNuxtdotjsHex} size={24} />;
      case "Tailwind":
        return (
          <SiTailwindcss title={stack} color={SiTailwindcssHex} size={24} />
        );
      case "Bootstrap":
        return <SiBootstrap title={stack} color={SiBootstrapHex} size={24} />;
    }
  };

  return (
    <>
      <div className='rounded-xl overflow-hidden border border-zinc-300'>
        <div className='h-[200px]'>
          <Image
            src={bringeee}
            className='object-cover'
            loading='lazy'
            alt='bringee'
          />
        </div>
        <div className='px-6 py-5 h-40 space-y-3'>
          <h3 className='font-medium capitalize'>{data.title}</h3>
          <p className='text-zinc-500'>{data.desc}</p>
          <div className='flex gap-2'>
            {data.techStack.map((stack) => filterStack(stack))}
          </div>
        </div>
      </div>
    </>
  );
}
