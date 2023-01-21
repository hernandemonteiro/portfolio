export interface iFormSkill {
  onChangeIdSkill: (e) => void;
  valueIdSkill: string | boolean;
  onChangeType: (e) => void;
  valueType: string;
  onChangeSkill: (e) => void;
  valueSkill: string;
  onSubmit: (e) => void;
  viewForm: () => void;
  titleSendButton: string;
}
