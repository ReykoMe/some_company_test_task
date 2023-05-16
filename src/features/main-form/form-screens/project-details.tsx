import { Button } from "../../../components/button";
import { Wrap } from "../../../components/wrap";
import { RadioInput } from "../../../components/radio-input/index";
import { Typography } from "../../../components/typography";
import { FormScreenProps } from "./types";

const GOALS = [
  "Grow My Community",
  "Activate Existing Members",
  "Understand My Members",
  "Other",
];

export const ProjectDetails: React.FC<FormScreenProps> = (props) => {
  const { onClickNext, onClickPrev, onChange, values } = props
    const getInputProps = (name: string) => ({
      value: values[name] || "",
      name,
      onChange,
    });
  return (
    <>
      <Typography color="tertiary">Project Details</Typography>
      <Typography component="h2">
        What is your main goal with AlphaQuest?
      </Typography>
      <RadioInput choices={GOALS} {...getInputProps("goals")} />
      <Wrap>
        <Wrap sx={{ width: "12rem", marginRight: "3.2rem" }}>
          <Button secondary onClick={onClickPrev}>Back</Button>
        </Wrap>
        <Wrap sx={{ width: "32.8rem" }}>
          <Button onClick={onClickNext}>Continue</Button>
        </Wrap>
      </Wrap>
    </>
  );
};
