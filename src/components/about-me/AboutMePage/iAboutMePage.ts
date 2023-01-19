export interface iAboutMePage {
  ownerInfo: [iOwnerInfo] | undefined;
  academy: [iAcademy] | undefined;
  skills: [iSkills] | undefined;
  experience: [iExperience] | undefined;
}

export interface iOwnerInfo {
  _id: string;
  name: string;
  resume: string;
  title: string;
  birthday: string;
  email: string;
  picture: string;
}

export interface iAcademy {
  title: string;
  foundation: string;
  since: string;
  status: string;
}

export interface iSkills {
  _id: string;
  type: string;
  skill: string;
}

export interface iExperience {
  _id: string;
  title: string;
  company: string;
  since: number;
  until: number;
}
