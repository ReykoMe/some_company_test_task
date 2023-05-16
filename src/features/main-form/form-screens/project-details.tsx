import { Button } from "../../../components/button";
import { Wrap } from "../../../components/wrap";
import { RadioInput } from "../../../components/radio-input/index";
import { Typography } from "../../../components/typography";
import { FormScreenProps } from "./types";
import { inputWrapperStyles } from "./styles";

const GOALS = [
  "Grow My Community",
  "Activate Existing Members",
  "Understand My Members",
  "Other",
];

export const ProjectDetails: React.FC<FormScreenProps> = (props) => {
  const { onClickNext, onClickPrev, getInputProps, isMobile } = props;

  return (
    <>
      <Wrap sx={{ flexDirection: "column", marginBottom: "2.8rem" }}>
        <Typography color="tertiary">Project Details</Typography>
        <Typography component="h2">
          What is your main goal with AlphaQuest?
        </Typography>
      </Wrap>
      <Wrap sx={inputWrapperStyles}>
        <RadioInput choices={GOALS} {...getInputProps("goals")} />
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
            Back
          </Button>
        </Wrap>
        <Wrap sx={{ maxWidth: isMobile ? "100%" : "12rem", width: "100%" }}>
          <Button onClick={onClickNext}>Continue</Button>
        </Wrap>
      </Wrap>
    </>
  );
};
