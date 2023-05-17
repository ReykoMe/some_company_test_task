import React, { useMemo } from "react";
import { MainLayout } from "./features/main-layout";
import { SidebarContent } from "./features/sidebar-content";
import { AddNewProject } from "./features/main-form/form-screens/add-new-project";
import { CreateProject } from "./features/main-form/form-screens/create-project";
import { ProjectDetails } from "./features/main-form/form-screens/project-details";
import { Stepper } from "./components/stepper";
import { useForm } from "./hooks/use-form";
import { Wrap } from "./components/wrap";
import { useMediaQuery } from "./hooks/use-media-query";
import { useCounter } from "./hooks/use-couter";
import { translations } from "./settings/translations";
import { FormDataType } from "./features/main-form/form-screens/types";
import { Modal } from "./components/modal";
import { UseModalControl } from "./hooks/use-modal-control";
import { Typography } from "./components/typography";
import { Button } from "./components/button";

const { stepper, createProject, projectDetails, summaryModal } =
  translations.us.projectForm;

const formScreens = [
  {
    title: stepper.startFirstProject,
    Component: AddNewProject,
  },
  {
    title: stepper.projectDetails,
    Component: ProjectDetails,
  },
  {
    title: stepper.createProject,
    Component: CreateProject,
  },
];

const STEPS = formScreens.map((el) => el.title);

const defaultValues: Partial<FormDataType> = {
  contactEmail: "mail@mail.com",
  workersCount: "0",
  postProductLaunches: createProject.inputs.postProductLaunchChoices[0],
  goals: projectDetails.inputs.goalsChoices[0],
};

const App: React.FC = () => {
  const form = useForm<Partial<FormDataType>>({ defaultValues });
  const modal = UseModalControl();
  const isSmScreen = useMediaQuery("sm");

  const { currentStep, next, prev } = useCounter({
    maxValue: STEPS.length - 1,
    onLastValue: modal.open,
  });

  const { Component: FormScreen } = formScreens[currentStep];

  const summaryModalValues = useMemo((): { label: string; value: string }[] => {
    return Object.entries(form.values).map((el) => {
      const [key, value] = el;
      const label = summaryModal.labels[key as keyof FormDataType];
      return { label, value };
    });
  }, [form.values]);

  return (
    <MainLayout
      sidebar={<SidebarContent steps={STEPS} currentStep={currentStep} />}
    >
      {isSmScreen && (
        <Wrap sx={{ justifyContent: "center", marginBottom: "2rem" }}>
          <Stepper steps={STEPS} currentStep={currentStep} isHideLabels />
        </Wrap>
      )}
      <Wrap sx={{ paddingBottom: "3rem", flexDirection: "column" }}>
        <FormScreen
          onClickNext={next}
          onClickPrev={prev}
          isMobile={isSmScreen}
          {...form}
        />
      </Wrap>

      <Modal open={modal.isOpen} onClose={modal.close}>
        <Typography component="h2">Summary imfo</Typography>
        <Wrap sx={{ flexDirection: "column", padding: "2rem" }}>
          {summaryModalValues.map((el) => (
            <Wrap sx={{ flexDirection: "column", marginBottom: "2rem" }}>
              <Typography>{el.label}:</Typography>
              <Typography component="h2" color="tertiary">
                {el.value}
              </Typography>
            </Wrap>
          ))}
          <Button onClick={form.handleSubmit}>
            {summaryModal.buttons.submit}
          </Button>
        </Wrap>
      </Modal>
    </MainLayout>
  );
};

export default App;
