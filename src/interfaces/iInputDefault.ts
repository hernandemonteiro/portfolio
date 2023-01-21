export interface iInputDefault {
  type?: "text" | "password" | "email" | "number" | "date" | "button";
  onChange?: (e) => void;
  onClick?: () => void;
  required?: boolean;
  width?: string;
  label?: string;
  hidden?: boolean;
  value?: any;
  placeholder?: string;
  min?: number;
  minLength?: number;
  autoFocus?: boolean;
}
