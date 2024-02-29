import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  Career,
  Projects,
  Education,
  Profile,
  Certificate,
} from "@/utils/interface";

const storeSlice = createSlice({
  name: "storeslice",
  initialState: {
    showSidebar: false as boolean,
    loadingBar: 0 as number,
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
        end: "7 November 2023",
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
        image: "/faruuhan-personal-web_tikosh.png",
        title: "faruuhan",
        desc: "Portfolio website build with TypeScript, Next and Tailwind.",
        techStack: ["TypeScript", "Next", "Tailwind"],
        urlRepositories: "https://github.com/faruuhan/nextjs-portfolio",
      },
      {
        image: "/v2-personal-website_nu23it.png",
        title: "v2-personal-website",
        desc: "Landing page personal portfolio project inspired by IOS widget.",
        techStack: ["JavaScript", "Nuxt", "Tailwind"],
        urlRepositories: "https://github.com/faruuhan/v2-personal-website",
      },
      {
        image: "/scraping-jkt48-website_b3oyld.png",
        title: "scraping-jkt48-website",
        desc: "REST API from scraping jkt48.com.",
        techStack: ["TypeScript", "Express"],
        urlRepositories: "https://github.com/faruuhan/scraping-jkt48-website",
      },
      {
        image: "/bringeee_niax2a.png",
        title: "Bringeee",
        desc: "Bringeee is WebApp for service sending cargo you can order anywhare in web.",
        techStack: ["JavaScript", "React", "Tailwind"],
        urlRepositories: "https://github.com/faruuhan/Bringeee-Transport-Cargo",
      },
      {
        image: "/muviku_rgbufb.png",
        title: "Muviku",
        desc: "Movie collection from tmdb API. Has a feature of selecting favorite films.",
        techStack: ["JavaScript", "React", "Bootstrap"],
        urlRepositories: "https://github.com/faruuhan/mymovie-app-react",
      },
      {
        image: "/pokemonapp_iddigs.png",
        title: "Pokemon App",
        desc: "A simple project that displays a list of Pokemon collections.",
        techStack: ["JavaScript", "Next", "Bootstrap"],
        urlRepositories: "https://github.com/faruuhan/pokemon-app",
      },
    ] as Array<Projects>,
    certificate: [
      {
        image: "/hrafhmbsscpucjfjhqg8.jpg",
        title: "Frontend Engineer Immersive Program Batch 04",
      },
      {
        image: "/hsj9jtmrzkvakmeuzm2g.jpg",
        title: "Workshop Javascript 101",
      },
      {
        image: "/wjgsdbwprutorpfxz7ex.jpg",
        title: "HTML Course Sololearn",
      },
      {
        image: "/oohpefiafqyawdgre9jf.jpg",
        title: "Workshop Backend 101",
      },
      {
        image: "/l82joa7zgcssyjvtwukd.jpg",
        title: "Full Stack Web Development Trial Class",
      },
      {
        image: "/qmu9adltxw4guhznxteb.jpg",
        title: "Company Profile Website With Wordpress",
      },
    ] as Array<Certificate>,
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
    handleLoandingBar: (state, action: PayloadAction<number>) => {
      state.loadingBar = action.payload;
    },
  },
});

export const { handleSidebar, handleLoandingBar } = storeSlice.actions;
export default storeSlice.reducer;
