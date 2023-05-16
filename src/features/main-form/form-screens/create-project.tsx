import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import { Wrap } from "../../../components/wrap";
import { RadioInput } from "../../../components/radio-input/index";
import { Typography } from "../../../components/typography";
import { FormScreenProps } from "./types";
import { CounterInput } from "../../../components/counter-input";

const PRE_POST_PRODUCT_LAUNCHES = ["Pre Product", "Post Product"];

export const CreateProject: React.FC<FormScreenProps> = (props) => {
  const { onClickNext, onClickPrev, getInputProps } = props;
  return (
    <>
      <Typography color="tertiary">Create Project</Typography>
      <Typography component="h2">
        How many full-time workers on the project?
      </Typography>
      <CounterInput {...getInputProps("workersCount")} min={0} />
      <Typography component="h2">
        Are you pre or post product launch?
      </Typography>
      <RadioInput
        choices={PRE_POST_PRODUCT_LAUNCHES}
        {...getInputProps("postProductLaunches")}
      />
      <Typography component="h2">Contact Email</Typography>
      <Input {...getInputProps("contactEmail")} />
      <Wrap>
        <Wrap sx={{ width: "12rem", marginRight: "3.2rem" }}>
          <Button secondary onClick={onClickPrev}>
            Back
          </Button>
        </Wrap>
        <Wrap sx={{ width: "32.8rem" }}>
          <Button onClick={onClickNext}>Create project</Button>
        </Wrap>
      </Wrap>
    </>
  );
};
