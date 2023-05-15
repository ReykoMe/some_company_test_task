
import React from "react";
import { Input } from "./components/input";
import { Chip } from "./components/chip";
import { Button } from "./components/button";
import { Radio } from "./components/radio";
import { Stepper } from "./components/stepper";
import { Wrap } from "./components/wrap";

const App: React.FC = () => {
  return <div>
    <Input />
    <Chip>Chip default</Chip>
    <Chip active>Chip active</Chip>
    <Wrap sx={{ maxWidth: '20rem' }}>
      <Button>Button main</Button>
    </Wrap>
    <Button secondary>Button secondary</Button>
    <Radio />
    <Radio checked />
    <Stepper isHideLabels/>
    <Stepper vertical />
    
  </div>
};

export default App;
