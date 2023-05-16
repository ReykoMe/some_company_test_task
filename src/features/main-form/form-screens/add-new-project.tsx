import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import { Wrap } from "../../../components/wrap";
import { ChipInput } from "../../../components/chip-input";
import { Typography } from "../../../components/typography";
import { FormScreenProps } from "./types";
import { inputWrapperStyles } from "./styles";

const TYPE_CHOICES = [
  "NFT",
  "GameFi",
  "DeFi",
  "DAO",
  "SocialFi",
  "Metaverse",
  "Tools",
  "Ecosystem",
  "Others",
];


export const AddNewProject: React.FC<FormScreenProps> = (props) => {
  const { onClickNext, getInputProps, isMobile } = props;

  return (
    <>
      <Wrap sx={{ marginBottom: "0.8rem" }}>
        <Typography color="tertiary">
          To Create Quest you need firstly create Project
        </Typography>
      </Wrap>
      <Wrap sx={inputWrapperStyles}>
        <Typography component="h2">Add New Project</Typography>
      </Wrap>
      <Wrap sx={inputWrapperStyles}>
        <Input
          label="Project Name (It can be changed later)"
          {...getInputProps("projectName")}
        />
      </Wrap>
      <Wrap sx={inputWrapperStyles}>
        <Input
          label="Project URL (It cannot be changed after creation)"
          beforeText="Alphaguilty.io/"
          {...getInputProps("projectUrl")}
        />
      </Wrap>
      <Wrap sx={inputWrapperStyles}>
        <ChipInput
          choices={TYPE_CHOICES}
          label="Project Category (It cannot be changed after creation)"
          {...getInputProps("projectType")}
        />
      </Wrap>

      <Wrap sx={{ maxWidth: isMobile ? "100%" : "32.8rem", width: "100%" }}>
        <Button onClick={onClickNext}>Add project</Button>
      </Wrap>
    </>
  );
};
