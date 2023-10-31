export interface Career {
  image: string;
  position: string;
  company: string;
  start: string;
  end: string;
  location: string;
}

export interface Projects {
  image: string;
  title: string;
  desc: string;
  techStack: string[];
  urlRepositories: string;
}

export interface Education {
  image: string;
  school: string;
  title: string;
  start: string;
  end: string;
  major: string;
}

export interface Profile {
  sampulImage: string;
  profileImage: string;
  fullName: string;
  username: string;
  bio: string;
}

export interface Skill {
  title: string;
}
