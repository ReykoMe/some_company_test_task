import { UseCounterReturnType } from "../../hooks/use-couter";

export type CreateProjectFormData = {
  projectName: string;
  projectUrl: string;
  projectType: string;
  goals: string;
  workersCount: string;
  postProductLaunches: string;
  contactEmail: string;
};

export type FormScreenProps = {
  title?: string;
  titleSecondary?: string;
};

export type FormScreenObject = Pick<
  FormScreenProps,
  "title" | "titleSecondary"
> & {
  stepperTitle: string;
  Component: React.ElementType;
};

export type CreateProjectFormProps = UseCounterReturnType & {
  onSubmit: (values: CreateProjectFormData) => void;
};
