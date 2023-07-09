import React, { useState } from "react";
import { MainLayout } from "./features/main-layout";
import { SidebarContent } from "./features/sidebar-content";
import { Stepper } from "./components/stepper";
import { Wrap } from "./components/wrap";
import { useCounter } from "./hooks/use-couter";
import { Modal } from "./components/modal";
import { useModalControl } from "./hooks/use-modal-control";
import { space } from "./utils/space";
import { CreateProjectForm, formScreens } from "./features/create-project-form";
import { CreateProjectFormData } from "./features/create-project-form/types";
import { Button } from "./components/button";
import { useTranslation } from "./hooks/use-translation";
import { CreateProjectSummary } from "./features/create-project-form/components/summary-modal";
import { breakpoint } from "./utils/breakpoint";

const STEPS = formScreens.map((el) => el.stepperTitle);

const App: React.FC = () => {
  const modal = useModalControl();
  const t = useTranslation("us");
  const [summary, setSummary] = useState<CreateProjectFormData | null>(null);

  const { currentStep, next, prev } = useCounter({
    maxValue: STEPS.length - 1,
    onLastValue: () => console.log("Last"),
  });

  const handleLastScreen = (values: CreateProjectFormData) => {
    setSummary(values);
    modal.open();
  };

  const handleSubmit = () => {
    console.log(summary);
    modal.close();
  };

  return (
    <MainLayout
      sidebar={
        <SidebarContent>
          <Stepper currentStep={currentStep} steps={STEPS} vertical />
        </SidebarContent>
      }
    >
      <Wrap
        sx={{
          justifyContent: "center",
          marginBottom: space(2),
          [breakpoint("min", "sm")]: {
            display: "none",
          },
        }}
      >
        <Stepper steps={STEPS} currentStep={currentStep} isHideLabels />
      </Wrap>
      <Wrap sx={{ paddingBottom: space(3), flexDirection: "column" }}>
        <CreateProjectForm
          currentStep={currentStep}
          next={next}
          prev={prev}
          onSubmit={handleLastScreen}
        />
      </Wrap>

      <Modal open={modal.isOpen} onClose={modal.close}>
        {summary && <CreateProjectSummary values={summary} />}
        <Wrap sx={{ margin: `${space(1)} ${space(2)}` }}>
          <Button onClick={handleSubmit}>
            {t.projectForm.summaryModal.buttons.submit}
          </Button>
        </Wrap>
      </Modal>
    </MainLayout>
  );
};

export default App;
