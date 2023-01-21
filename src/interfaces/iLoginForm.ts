export interface iLoginForm {
  onSubmit: (e) => void;
  onChangeEmail: (e) => void;
  onChangePassword: (e) => void;
  message?: string;
}
