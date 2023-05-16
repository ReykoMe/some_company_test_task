import { Button } from "../../../components/button";
import { Wrap } from "../../../components/wrap";
import { RadioInput } from "../../../components/radio-input/index";
import { Typography } from "../../../components/typography";
import { FormScreenProps } from "./types";
import { inputWrapperStyles } from "./styles";
import { useTranslation } from "../../../hooks/use-translation";

export const ProjectDetails: React.FC<FormScreenProps> = (props) => {
  const { onClickNext, onClickPrev, getInputProps, isMobile } = props;
  const { projectForm } = useTranslation("us");
  const t = projectForm.projectDetails;
  return (
    <>
      <Wrap sx={{ flexDirection: "column", marginBottom: "2.8rem" }}>
        <Typography color="tertiary">{t.headers.main}</Typography>
        <Typography component="h2">{t.headers.subheader}</Typography>
      </Wrap>
      <Wrap sx={inputWrapperStyles}>
        <RadioInput
          choices={t.inputs.goalsChoices}
          {...getInputProps("goals")}
        />
      </Wrap>
      <Wrap>
        <Wrap
          sx={{
            maxWidth: isMobile ? "100%" : "12rem",
            marginRight: "3.2rem",
            width: "100%",
          }}
        >
          <Button secondary onClick={onClickPrev}>
            {t.buttons.back}
          </Button>
        </Wrap>
        <Wrap sx={{ maxWidth: isMobile ? "100%" : "12rem", width: "100%" }}>
          <Button onClick={onClickNext}>{t.buttons.continue}</Button>
        </Wrap>
      </Wrap>
    </>
  );
};
