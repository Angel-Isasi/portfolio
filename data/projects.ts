export type Project = {
  title: string;
  description: string;
  tech: string[];
  demoUrl: string;
  repoUrl?: string;
  image?: string;
  client?: boolean;
};

export const projects: Project[] = [
  {
    title: "La Silenciosa",
    description:
      "Website for a Guatemalan restaurant, built for a real client. Dark theme with custom branding, product catalog, and ordering through WhatsApp. Includes ongoing maintenance.",
    tech: ["Next.js", "CSS", "Vercel"],
    demoUrl: "https://lasilenciosa.com",
    image: "/projects/la-silenciosa.png",
    client: true,
  },
  {
    title: "Word Masters",
    description:
      "Wordle clone built with vanilla HTML, CSS and JavaScript. Consumes an API with fetch (GET and POST), validates words and handles repeated letters.",
    tech: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://word-masters-beta.vercel.app",
    repoUrl: "https://github.com/Angel-Isasi/word-masters",
  },
];
