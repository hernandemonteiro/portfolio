export interface AboutMePageProps {
  ownerInfo: [
    {
      _id: string;
      name: string;
      resume: string;
      title: string;
      birthday: string;
      email: string;
      picture: string;
    }
  ];
  academy: [
    {
      title: string;
      foundation: string;
      since: string;
      status: string;
    }
  ];
  skills: [
    {
      _id: string;
      type: string;
      skill: string;
    }
  ];
  experience: [
    {
      title: string;
      company: string;
      since: string;
      until: string;
    }
  ];
}
