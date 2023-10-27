import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Career, Projects, Education, Profile } from "@/utils/interface";

const storeSlice = createSlice({
  name: "storeslice",
  initialState: {
    showSidebar: false as boolean,
    profile: {
      sampulImage: "/marsha_cltbqq.jpg",
      profileImage: "/profile_u9jqpt.jpg",
      fullName: "Farhan Ramadhan",
      username: "faruuhan",
      bio: "Software Engineer",
    } as Profile,
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
    education: [
      {
        image: "/alterra_e88p1o.png",
        school: "Alterra Academy",
        title: "Student",
        start: "2022",
        end: "2022",
        major: "Immersive Frontend Engineer",
      },
      {
        image: "/lp3i_mfauf1.png",
        school: "Polytechnic LP3I Jakarta",
        title: "Associate Degree",
        start: "2017",
        end: "2020",
        major: "Informatics Management (A.Md. Kom)",
      },
    ] as Array<Education>,
    projects: [
      {
        image: "/bringeee_niax2a.png",
        title: "Bringeee",
        desc: "Bringeee is WebApp for service sending cargo you can order anywhare in web.",
        techStack: ["JavaScript", "React", "Tailwind"],
      },
      {
        image: "/muviku_rgbufb.png",
        title: "Muviku",
        desc: "Movie collection from tmdb API. Has a feature of selecting favorite films.",
        techStack: ["JavaScript", "React", "Bootstrap"],
      },
      {
        image: "/pokemonapp_iddigs.png",
        title: "Pokemon App",
        desc: "A simple project that displays a list of Pokemon collections.",
        techStack: ["JavaScript", "Next", "Bootstrap"],
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
