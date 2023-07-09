import { Input } from "../../../../components/input";
import { ChipInput } from "../../../../components/chip-input";
import { useTranslation } from "../../../../hooks/use-translation";
import { useFormContext, Controller } from "react-hook-form";
import { CreateProjectFormData } from "../../types";
import { Component } from "../../styles";

export const AddNewProject: React.FC = () => {
  const { register, control } = useFormContext<CreateProjectFormData>();
  const { projectForm } = useTranslation("us");
  const t = projectForm.addProject;
  return (
    <>
      <Component.InputWrapper>
        <Input
          label={t.inputs.labels.projectName}
          {...register("projectName")}
        />
      </Component.InputWrapper>
      <Component.InputWrapper>
        <Input
          label={t.inputs.labels.projectUrl}
          beforeText="http://example.com/"
          {...register("projectUrl")}
        />
      </Component.InputWrapper>
      <Component.InputWrapper>
        <Controller
          name="projectType"
          control={control}
          render={({ field }) => (
            <ChipInput
              choices={t.inputs.projectTypeChoices}
              label={t.inputs.labels.projectType}
              {...field}
            />
          )}
        />
      </Component.InputWrapper>
    </>
  );
};
