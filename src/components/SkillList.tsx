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
import { Skill } from "@/utils/interface";

export default function SkillList({ title }: Skill): JSX.Element {
  const getSkill = (skill: string) => {
    switch (skill) {
      case "JavaScript":
        return <SiJavascript title={title} color={SiJavascriptHex} size={24} />;
      case "TypeScript":
        return <SiTypescript title={title} color={SiTypescriptHex} size={24} />;
      case "React":
        return <SiReact title={title} color={SiReactHex} size={24} />;
      case "Next":
        return <SiNextdotjs title={title} color={SiNextdotjsHex} size={24} />;
      case "Vue":
        return <SiVuedotjs title={title} color={SiVuedotjsHex} size={24} />;
      case "Nuxt":
        return <SiNuxtdotjs title={title} color={SiNuxtdotjsHex} size={24} />;
      case "HTML":
        return <SiHtml5 title={title} color={SiHtml5Hex} size={24} />;
      case "CSS":
        return <SiCss3 title={title} color={SiCss3Hex} size={24} />;
      case "SASS":
        return <SiSass title={title} color={SiSassHex} size={24} />;
      case "Tailwind":
        return (
          <SiTailwindcss title={title} color={SiTailwindcssHex} size={24} />
        );
      case "Bootstrap":
        return <SiBootstrap title={title} color={SiBootstrapHex} size={24} />;
      case "PHP":
        return <SiPhp title={title} color={SiPhpHex} size={24} />;
      case "CodeIgniter":
        return (
          <SiCodeigniter title={title} color={SiCodeigniterHex} size={24} />
        );
      case "Laravel":
        return <SiLaravel title={title} color={SiLaravelHex} size={24} />;
      case "MySql":
        return <SiMysql title={title} color={SiMysqlHex} size={24} />;
      case "Express":
        return <SiExpress title={title} color={SiExpressHex} size={24} />;
      case "NodeJS":
        return <SiNodedotjs title={title} color={SiNodedotjsHex} size={24} />;
    }
  };
  return (
    <>
      <div className='rounded-full border bg-white border-zinc-300 py-2 px-5 flex gap-2'>
        {getSkill(title)}
        {title}
      </div>
    </>
  );
}
