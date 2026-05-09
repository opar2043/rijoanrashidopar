export type PROJECT = {
  id: string;
  name: string;
  project: string;
  github: string;
  description: string;
  project_link: string;
  plan: string;
  photo: string;
  tech: string[];
};

export type REVIEW = {
  id: string;
  name: string;
  description: string;
  image: string;
  liveLink: string;
  githubLink: string;
  techStack: string[];
};
export type BLOGS = {
  title: string;
  image: string;
  date: string;
  description: string;
  id: string;
};
