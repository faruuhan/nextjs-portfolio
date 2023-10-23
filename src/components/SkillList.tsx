"use client";
import {
  SiJavascript,
  SiJavascriptHex,
  SiTypescript,
  SiTypescriptHex,
  SiReact,
  SiReactHex,
  SiNextdotjs,
  SiNextdotjsHex,
  SiVuedotjs,
  SiVuedotjsHex,
  SiNuxtdotjs,
  SiNuxtdotjsHex,
  SiHtml5,
  SiHtml5Hex,
  SiCss3,
  SiCss3Hex,
  SiSass,
  SiSassHex,
  SiTailwindcss,
  SiTailwindcssHex,
  SiBootstrap,
  SiBootstrapHex,
  SiPhp,
  SiPhpHex,
  SiCodeigniter,
  SiCodeigniterHex,
  SiLaravel,
  SiLaravelHex,
  SiMysql,
  SiMysqlHex,
  SiExpress,
  SiExpressHex,
  SiNodedotjs,
  SiNodedotjsHex,
} from "@icons-pack/react-simple-icons";

interface Skill {
  title: string;
  key: number;
}

export default function Skills(props: Skill) {
  const getSkill = (skill: string) => {
    switch (skill) {
      case "JavaScript":
        return (
          <SiJavascript title={props.title} color={SiJavascriptHex} size={24} />
        );
      case "TypeScript":
        return (
          <SiTypescript title={props.title} color={SiTypescriptHex} size={24} />
        );
      case "React":
        return <SiReact title={props.title} color={SiReactHex} size={24} />;
      case "Next":
        return (
          <SiNextdotjs title={props.title} color={SiNextdotjsHex} size={24} />
        );
      case "Vue":
        return (
          <SiVuedotjs title={props.title} color={SiVuedotjsHex} size={24} />
        );
      case "Nuxt":
        return (
          <SiNuxtdotjs title={props.title} color={SiNuxtdotjsHex} size={24} />
        );
      case "HTML":
        return <SiHtml5 title={props.title} color={SiHtml5Hex} size={24} />;
      case "CSS":
        return <SiCss3 title={props.title} color={SiCss3Hex} size={24} />;
      case "SASS":
        return <SiSass title={props.title} color={SiSassHex} size={24} />;
      case "Tailwind":
        return (
          <SiTailwindcss
            title={props.title}
            color={SiTailwindcssHex}
            size={24}
          />
        );
      case "Bootstrap":
        return (
          <SiBootstrap title={props.title} color={SiBootstrapHex} size={24} />
        );
      case "PHP":
        return <SiPhp title={props.title} color={SiPhpHex} size={24} />;
      case "CodeIgniter":
        return (
          <SiCodeigniter
            title={props.title}
            color={SiCodeigniterHex}
            size={24}
          />
        );
      case "Laravel":
        return <SiLaravel title={props.title} color={SiLaravelHex} size={24} />;
      case "MySql":
        return <SiMysql title={props.title} color={SiMysqlHex} size={24} />;
      case "Express":
        return <SiExpress title={props.title} color={SiExpressHex} size={24} />;
      case "NodeJS":
        return (
          <SiNodedotjs title={props.title} color={SiNodedotjsHex} size={24} />
        );
    }
  };
  return (
    <>
      <div className='rounded-full border border-zinc-300 py-2 px-5 flex gap-2'>
        {getSkill(props!.title)}
        {props!.title}
      </div>
    </>
  );
}
