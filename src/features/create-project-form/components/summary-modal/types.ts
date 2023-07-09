import { CreateProjectFormData } from "../../types";

export type CreateProjectSummaryProps = {
  values: CreateProjectFormData;
};

export type TitlesMap = Record<keyof CreateProjectFormData, string>;
