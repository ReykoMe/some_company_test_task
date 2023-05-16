import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import { Wrap } from "../../../components/wrap";
import { ChipInput } from "../../../components/chip-input";
import { Typography } from "../../../components/typography";
import { FormScreenProps } from "./types";
import { inputWrapperStyles } from "./styles";
import { useTranslation } from "../../../hooks/use-translation";

export const AddNewProject: React.FC<FormScreenProps> = (props) => {
  const { onClickNext, getInputProps, isMobile } = props;
  const { projectForm } = useTranslation("us");
  const t = projectForm.addProject;
  return (
    <>
      <Wrap sx={{ marginBottom: "0.8rem" }}>
        <Typography color="tertiary">{t.headers.main}</Typography>
      </Wrap>
      <Wrap sx={inputWrapperStyles}>
        <Typography component="h2">{t.headers.subheader}</Typography>
      </Wrap>
      <Wrap sx={inputWrapperStyles}>
        <Input
          label={t.inputs.labels.projectName}
          {...getInputProps("projectName")}
        />
      </Wrap>
      <Wrap sx={inputWrapperStyles}>
        <Input
          label={t.inputs.labels.projectUrl}
          beforeText="Alphaguilty.io/"
          {...getInputProps("projectUrl")}
        />
      </Wrap>
      <Wrap sx={inputWrapperStyles}>
        <ChipInput
          choices={t.inputs.projectTypeChoices}
          label={t.inputs.labels.projectType}
          {...getInputProps("projectType")}
        />
      </Wrap>

      <Wrap sx={{ maxWidth: isMobile ? "100%" : "32.8rem", width: "100%" }}>
        <Button onClick={onClickNext}>{t.buttons.addProject}</Button>
      </Wrap>
    </>
  );
};
