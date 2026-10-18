export type Project = {
  title: string;
  description: string;
  tech: string[];
  demoUrl: string;
  repoUrl: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Word Masters",
    description:
      "Clon de Wordle con HTML, CSS y JavaScript puro. Consume una API con fetch (GET y POST), valida palabras y maneja letras repetidas.",
    tech: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://word-masters-beta.vercel.app",
    repoUrl: "https://github.com/Angel-Isasi/word-masters",
  },
];
