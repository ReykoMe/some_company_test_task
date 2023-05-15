import React, { useState } from "react";
import { Input } from "./components/input";
import { Chip } from "./components/chip";
import { Button } from "./components/button";
import { Radio } from "./components/radio";
import { Stepper } from "./components/stepper";
import { Wrap } from "./components/wrap";
import { MainLayout } from "./features/main-layout";
import { SidebarContent } from "./features/sidebar-content";
import { ChipInput } from "./components/chip-input";
import {RadioInput} from './components/radio-input/index';
const STEPS = ["Start First Project", "Project Details", "Create Project"];

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

const GOALS = [
"Grow My Community",
"Activate Existing Members",
"Understand My Members",
"Other"
]

const PRE_POST_PRODUCT_LAUNCHES = [
"Pre Product",
"Post Product",
]

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  return (
    <MainLayout
      sidebar={<SidebarContent steps={STEPS} currentStep={currentStep} />}
    >
      <span>To Create Quest you need firstly create Project</span>
      <h2>Add New Project</h2>
      <Input label="Project Name (It can be changed later)" />
      <Input
        label="Project URL (It cannot be changed after creation)"
        beforeText="Alphaguilty.io/"
      />
      <ChipInput
        choices={TYPE_CHOICES}
        value={"Tools"}
        label="Project Category (It cannot be changed after creation)"
      />
      <Wrap sx={{ maxWidth: "32.8rem" }}>
        <Button>Add project</Button>
      </Wrap>
      <span>Project Details</span>
      <h2>What is your main goal with AlphaQuest?</h2>
      <RadioInput choices={GOALS} value={GOALS[1]} />
      <Wrap>
        <Wrap sx={{ width: "12rem", marginRight: "3.2rem" }}>
          <Button secondary>Back</Button>
        </Wrap>
        <Wrap sx={{ width: "32.8rem" }}>
          <Button>Continue</Button>
        </Wrap>
      </Wrap>
      <span>Create Project</span>
      <h2>How many full-time workers on the project?</h2>
      <Wrap>
        <Wrap sx={{ width: "4.8rem" }}>
          <Button secondary>-</Button>
        </Wrap>
        <Wrap sx={{margin: '0 1rem'}}>
        <Input value="4" />
        </Wrap>
        <Wrap sx={{ width: "4.8rem", height: "4.8rem" }}>
          <Button secondary>+</Button>
        </Wrap>
      </Wrap>
      <h2>Are you pre or post product launch?</h2>
      <RadioInput
        choices={PRE_POST_PRODUCT_LAUNCHES}
        value={PRE_POST_PRODUCT_LAUNCHES[1]}
      />
      <h2>Contact Email</h2>
      <Input />
      <Wrap>
        <Wrap sx={{ width: "12rem", marginRight: "3.2rem" }}>
          <Button secondary>Back</Button>
        </Wrap>
        <Wrap sx={{ width: "32.8rem" }}>
          <Button>Create project</Button>
        </Wrap>
      </Wrap>
    </MainLayout>
  );
};

export default App;
