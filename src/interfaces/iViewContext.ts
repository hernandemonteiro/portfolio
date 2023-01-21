export interface iViewProvider {
  children: React.ReactNode;
}

export interface iViewContext {
  view: boolean;
  setView: (e) => void;
}
