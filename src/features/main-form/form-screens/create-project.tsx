import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import { Wrap } from "../../../components/wrap";
import { RadioInput } from "../../../components/radio-input";
import { Typography } from "../../../components/typography";
import { FormScreenProps } from "./types";
import { CounterInput } from "../../../components/counter-input";
import { inputWrapperStyles } from "./styles";

const PRE_POST_PRODUCT_LAUNCHES = ["Pre Product", "Post Product"];

export const CreateProject: React.FC<FormScreenProps> = (props) => {
  const { onClickNext, onClickPrev, getInputProps, isMobile } = props;
  return (
    <>
      <Wrap sx={{ marginBottom: "1.6rem", flexDirection: "column" }}>
        <Typography color="tertiary">Create Project</Typography>
        <Typography component="h2">
          How many full-time workers on the project?
        </Typography>
      </Wrap>
      <Wrap sx={inputWrapperStyles}>
        <CounterInput {...getInputProps("workersCount")} min={0} />
      </Wrap>
      <Wrap sx={{ marginBottom: "1.6rem" }}>
        <Typography component="h2">
          Are you pre or post product launch?
        </Typography>
      </Wrap>
      <Wrap sx={inputWrapperStyles}>
        <RadioInput
          choices={PRE_POST_PRODUCT_LAUNCHES}
          {...getInputProps("postProductLaunches")}
        />
      </Wrap>
      <Wrap sx={{ marginBottom: "1.6rem" }}>
        <Typography component="h2">Contact Email</Typography>
      </Wrap>
      <Wrap sx={inputWrapperStyles}>
        <Input {...getInputProps("contactEmail")} />
      </Wrap>
      <Wrap>
        <Wrap sx={{ maxWidth: isMobile ? "100%" :"12rem", marginRight: "3.2rem", width: "100%" }}>
          <Button secondary onClick={onClickPrev}>
            Back
          </Button>
        </Wrap>
        <Wrap sx={{ maxWidth: isMobile ? "100%" : "32.8rem", width: "100%" }}>
          <Button onClick={onClickNext}>Create project</Button>
        </Wrap>
      </Wrap>
    </>
  );
};
