export type TRegistrationFormUI = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export type TRegistrationFormUIProps = {
  onSubmit: (value?: Partial<TRegistrationFormUI>) => void;
  loading: boolean;
}
