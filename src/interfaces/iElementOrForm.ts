export interface iElementOrForm {
  element: JSX.Element;
  changeViewFunction?: () => void;
  form: JSX.Element;
  message: string;
}
