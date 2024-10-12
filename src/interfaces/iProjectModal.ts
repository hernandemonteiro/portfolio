export interface iProjectModal {
  projectCard: React.ReactNode;
  aboutTheProject: React.ReactNode | string;
  tecnologiesUsed: Array<string>;
  projectLink?: string;
  codeLink?: string;
  projectTitle: string;
}
