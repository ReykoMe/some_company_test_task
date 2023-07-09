import { RadioInput } from "../../../../components/radio-input/index";
import { useTranslation } from "../../../../hooks/use-translation";
import { Controller, useFormContext } from "react-hook-form";
import { CreateProjectFormData } from "../../types";
import { Component } from "../../styles";

export const ProjectDetails: React.FC = () => {
  const { control } = useFormContext<CreateProjectFormData>();
  const { projectForm } = useTranslation("us");
  const t = projectForm.projectDetails;

  return (
    <>
      <Component.InputWrapper>
        <Controller
          name="goals"
          control={control}
          render={({ field }) => (
            <RadioInput choices={t.inputs.goalsChoices} {...field} />
          )}
        />
      </Component.InputWrapper>
    </>
  );
};
