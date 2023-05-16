import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import { Wrap } from "../../../components/wrap";
import { RadioInput } from "../../../components/radio-input";
import { Typography } from "../../../components/typography";
import { FormScreenProps } from "./types";
import { CounterInput } from "../../../components/counter-input";
import { inputWrapperStyles } from "./styles";
import { useTranslation } from "../../../hooks/use-translation";

export const CreateProject: React.FC<FormScreenProps> = (props) => {
  const { onClickNext, onClickPrev, getInputProps, isMobile } = props;
  const { projectForm } = useTranslation("us");
  const t = projectForm.createProject;

  return (
    <>
      <Wrap sx={{ marginBottom: "1.6rem", flexDirection: "column" }}>
        <Typography color="tertiary">{t.headers.main}</Typography>
        <Typography component="h2">{t.inputs.labels.workersCount}</Typography>
      </Wrap>
      <Wrap sx={inputWrapperStyles}>
        <CounterInput {...getInputProps("workersCount")} min={0} />
      </Wrap>
      <Wrap sx={{ marginBottom: "1.6rem" }}>
        <Typography component="h2">
          {t.inputs.labels.postProductLaunch}
        </Typography>
      </Wrap>
      <Wrap sx={inputWrapperStyles}>
        <RadioInput
          choices={t.inputs.postProductLaunchChoices}
          {...getInputProps("postProductLaunches")}
        />
      </Wrap>
      <Wrap sx={{ marginBottom: "1.6rem" }}>
        <Typography component="h2">{t.inputs.labels.contactEmail}</Typography>
      </Wrap>
      <Wrap sx={inputWrapperStyles}>
        <Input {...getInputProps("contactEmail")} />
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
        <Wrap sx={{ maxWidth: isMobile ? "100%" : "32.8rem", width: "100%" }}>
          <Button onClick={onClickNext}>{t.buttons.createProject}</Button>
        </Wrap>
      </Wrap>
    </>
  );
};
