import React, { useState } from "react";

import { MainLayout } from "./features/main-layout";
import { SidebarContent } from "./features/sidebar-content";
import { AddNewProject } from "./features/main-form/form-screens/add-new-project";
import { CreateProject } from "./features/main-form/form-screens/create-project";
import { ProjectDetails } from "./features/main-form/form-screens/project-details";
import { Stepper } from "./components/stepper";
import { useForm } from "./hooks/use-form";

const screens = [
  { title: "Start First Project", Component: AddNewProject },
  { title: "Project Details", Component: ProjectDetails },
  { title: "Create Project", Component: CreateProject },
];

const STEPS = screens.map((el) => el.title);

type FormDataType = {
  projectName: string;
  projectUrl: string;
  projectType: string;
  goals: string;
  workersCount: string;
  postProductLaunches: string;
  contactEmail: string
};

const defaultValues: Partial<FormDataType> = {
  projectName: "Test project name",
  projectUrl: "some_project_url",
  projectType: "NFT",
  goals: "Activate Existing Members",
  workersCount: "30",
  postProductLaunches: "Pre Product",
  contactEmail: "mail@mail.com"
}

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const form = useForm<Partial<FormDataType>>({ defaultValues });
  const nextStep = () =>
    setCurrentStep((prev) => (prev < STEPS.length - 1 && ++prev) || prev);
  const prevStep = () => setCurrentStep((prev) => (prev > 0 && --prev) || prev);

  const { Component: FormScreen } = screens[currentStep];
  const isLastScreen = currentStep === STEPS.length - 1;
  const handleClickNext = isLastScreen ? form.handleSubmit : nextStep;

  return (
    <MainLayout
      sidebar={<SidebarContent steps={STEPS} currentStep={currentStep} />}
    >
      <Stepper steps={STEPS} currentStep={currentStep} isHideLabels />
      <FormScreen
        onClickNext={handleClickNext}
        onClickPrev={prevStep}
        {...form}
      />
    </MainLayout>
  );
};

export default App;
