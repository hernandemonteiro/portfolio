export interface iAcademy {
  changeViewFunction?: () => void;
  academy: any;
  pagination: number;
  buttonPagination: JSX.Element | undefined;
  TableContent: (element) => JSX.Element | void;
  message: string;
  onSubmitForm: (e) => void;
  setIdExperience: (e) => void;
  idExperience: string | boolean;
  setCourse: (e) => void;
  course: string;
  setFoundation: (e) => void;
  foundation: string;
  setSince: (e) => void;
  since: string;
  setStatus: (e) => void;
  status: string;
}
