import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import { Wrap } from "../../../components/wrap";
import { ChipInput } from "../../../components/chip-input";
import { Typography } from "../../../components/typography";
import { FormScreenProps } from "./types";
import { useForm } from "../../../hooks/use-form";

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
  const { onClickNext, getInputProps } = props;

  return (
    <>
      <Typography color="tertiary">
        To Create Quest you need firstly create Project
      </Typography>
      <Typography component="h2">Add New Project</Typography>
      <Input
        label="Project Name (It can be changed later)"
        {...getInputProps("projectName")}
      />
      <Input
        label="Project URL (It cannot be changed after creation)"
        beforeText="Alphaguilty.io/"
        {...getInputProps("projectUrl")}
      />
      <ChipInput
        choices={TYPE_CHOICES}
        label="Project Category (It cannot be changed after creation)"
        {...getInputProps("projectType")}
      />
      <Wrap sx={{ maxWidth: "32.8rem" }}>
        <Button onClick={onClickNext}>Add project</Button>
      </Wrap>
    </>
  );
};
