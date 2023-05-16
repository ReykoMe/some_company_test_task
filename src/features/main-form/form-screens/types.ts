import { UseFormReturnType } from "../../../hooks/use-form";

export type FormScreenProps = UseFormReturnType & {
  onClickNext: VoidFunction;
  onClickPrev?: VoidFunction;
  isMobile?: boolean
};

export type FormDataType = {
  projectName: string;
  projectUrl: string;
  projectType: string;
  goals: string;
  workersCount: string;
  postProductLaunches: string;
  contactEmail: string;
};
