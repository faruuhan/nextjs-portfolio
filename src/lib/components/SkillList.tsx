"use client";
import IconTechStack from "@/lib/elements/IconTechStack";
import { Skill } from "@/utils/interface";

export default function SkillList({ title }: Skill): JSX.Element {
  return (
    <>
      <div className='rounded-full border bg-white border-zinc-300 py-2 px-5 flex gap-2'>
        <IconTechStack stack={title} size={24} />
        {title}
      </div>
    </>
  );
}
