import { Input } from "../../../../components/input";
import { Wrap } from "../../../../components/wrap";
import { RadioInput } from "../../../../components/radio-input";
import { Typography } from "../../../../components/typography";
import { CounterInput } from "../../../../components/counter-input";
import { useTranslation } from "../../../../hooks/use-translation";
import { Controller, useFormContext } from "react-hook-form";
import { space } from "../../../../utils/space";
import { CreateProjectFormData } from "../../types";
import { Component } from "../../styles";

export const CreateProject: React.FC = () => {
  const { register, control } = useFormContext<CreateProjectFormData>();
  const { projectForm } = useTranslation("us");
  const t = projectForm.createProject;

  return (
    <>
      <Component.InputWrapper>
        <Controller
          name="workersCount"
          control={control}
          render={({ field }) => (
            <CounterInput {...field} min={0} max={10000} />
          )}
        />
      </Component.InputWrapper>

      <Typography component="h2">
        {t.inputs.labels.postProductLaunch}
      </Typography>

      <Component.InputWrapper>
        <Controller
          control={control}
          name="postProductLaunches"
          render={({ field }) => (
            <RadioInput
              choices={t.inputs.postProductLaunchChoices}
              {...field}
            />
          )}
        />
      </Component.InputWrapper>

      <Wrap sx={{ marginBottom: space(1.6) }}>
        <Typography component="h2">{t.inputs.labels.contactEmail}</Typography>
      </Wrap>

      <Component.InputWrapper>
        <Input {...register("contactEmail")} />
      </Component.InputWrapper>
    </>
  );
};
