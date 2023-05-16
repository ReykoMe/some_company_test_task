import { UseFormReturnType } from "../../../hooks/use-form";

export type FormScreenProps = UseFormReturnType & {
  onClickNext: VoidFunction;
  onClickPrev?: VoidFunction;
};
