import React, { useEffect, useState } from "react";

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
  contactEmail: string;
};

const defaultValues: Partial<FormDataType> = {
  contactEmail: "mail@mail.com",
  workersCount: "0",
  postProductLaunches: "Pre Product",
  goals: "Grow My Community",
};

const App: React.FC = () => {
  const form = useForm<Partial<FormDataType>>({ defaultValues });
  const isSmScreen = useMediaQuery("sm");
  
  const { currentStep, next, prev } = useCounter({
    maxValue: STEPS.length - 1,
    onLastValue: form.handleSubmit,
  });

  const { Component: FormScreen } = screens[currentStep];

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
    </MainLayout>
  );
};

export default App;
