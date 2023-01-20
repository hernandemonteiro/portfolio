export interface iExperienceForm {
  onSubmit: (e) => void;
  onChangeOccupation: (e) => void;
  OccupationValue: string;
  onChangeCompany: (e) => void;
  CompanyValue: string;
  onChangeSinceYear: (e) => void;
  SinceValue: number;
  onChangeUntilYear: (e) => void;
  UntilValue: number;
  onChangeIdExperience: (e) => void;
  idExperienceValue: string | boolean;
  titleSendButton: string;
}
