import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Career, Projects } from "@/utils/interface";

const storeSlice = createSlice({
  name: "storeslice",
  initialState: {
    showSidebar: false as boolean,
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next",
      "Vue",
      "Nuxt",
      "HTML",
      "CSS",
      "SASS",
      "Tailwind",
      "Bootstrap",
      "PHP",
      "CodeIgniter",
      "Laravel",
      "MySql",
      "Express",
      "NodeJS",
    ] as Array<string>,
    career: [
      {
        image: "/bgn_e1sfcf.png",
        company: "BiznetGio.com",
        position: "Software Enginner",
        start: "7 November 2022",
        end: "",
        location: "Jakarta",
      },
    ] as Array<Career>,
    projects: [
      {
        image: "/bringeee_niax2a.png",
        title: "Bringeee",
        desc: "Bringeee is WebApp for service sending cargo you can order anywharein web.",
        techStack: ["JavaScript", "React", "Tailwind"],
      },
    ] as Array<Projects>,
  },
  reducers: {
    handleSidebar: (state, action: PayloadAction<boolean>) => {
      state.showSidebar = action.payload;
      const sidebar = document.getElementById("sidebar");
      if (state.showSidebar) {
        sidebar!.classList.add("translate-x-full");
        sidebar!.classList.remove("-translate-x-[120%]");
      } else {
        sidebar!.classList.add("-translate-x-[120%]");
        sidebar!.classList.remove("translate-x-full");
      }
    },
  },
});

export const { handleSidebar } = storeSlice.actions;
export default storeSlice.reducer;
