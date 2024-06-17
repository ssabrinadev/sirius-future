export type TLoginFormUI = {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export type TLoginUIProps = {
  onSubmit: (value: TLoginFormUI) => void;
  loading: boolean;
}
