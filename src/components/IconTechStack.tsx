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

interface IconTechStack {
  stack: string;
  size: number;
}

export default function IconTechStack({
  stack,
  size,
}: IconTechStack): JSX.Element {
  return (
    <>
      {stack === "JavaScript" && (
        <SiJavascript title={stack} color={SiJavascriptHex} size={size} />
      )}
      {stack === "TypeScript" && (
        <SiTypescript title={stack} color={SiTypescriptHex} size={size} />
      )}
      {stack === "React" && (
        <SiReact title={stack} color={SiReactHex} size={size} />
      )}
      {stack === "Next" && (
        <SiNextdotjs title={stack} color={SiNextdotjsHex} size={size} />
      )}
      {stack === "Vue" && (
        <SiVuedotjs title={stack} color={SiVuedotjsHex} size={size} />
      )}
      {stack === "Nuxt" && (
        <SiNuxtdotjs title={stack} color={SiNuxtdotjsHex} size={size} />
      )}
      {stack === "HTML" && (
        <SiHtml5 title={stack} color={SiHtml5Hex} size={size} />
      )}
      {stack === "CSS" && (
        <SiCss3 title={stack} color={SiCss3Hex} size={size} />
      )}
      {stack === "SASS" && (
        <SiSass title={stack} color={SiSassHex} size={size} />
      )}
      {stack === "Tailwind" && (
        <SiTailwindcss title={stack} color={SiTailwindcssHex} size={size} />
      )}
      {stack === "Bootstrap" && (
        <SiBootstrap title={stack} color={SiBootstrapHex} size={size} />
      )}
      {stack === "PHP" && <SiPhp title={stack} color={SiPhpHex} size={size} />}
      {stack === "CodeIgniter" && (
        <SiCodeigniter title={stack} color={SiCodeigniterHex} size={size} />
      )}
      {stack === "Laravel" && (
        <SiLaravel title={stack} color={SiLaravelHex} size={size} />
      )}
      {stack === "MySql" && (
        <SiMysql title={stack} color={SiMysqlHex} size={size} />
      )}
      {stack === "Express" && (
        <SiExpress title={stack} color={SiExpressHex} size={size} />
      )}
      {stack === "NodeJS" && (
        <SiNodedotjs title={stack} color={SiNodedotjsHex} size={size} />
      )}
    </>
  );
}
