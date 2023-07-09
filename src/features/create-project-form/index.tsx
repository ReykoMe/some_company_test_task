import { UseCounterReturnType } from "../../hooks/use-couter";
import { AddNewProject } from "./components/form-screens/add-new-project";
import { CreateProject } from "./components/form-screens/create-project";
import { ProjectDetails } from "./components/form-screens/project-details";
import { translations } from "../../settings/translations";
import { Wrap } from "../../components/wrap";
import { Button } from "../../components/button";
import { breakpoint } from "../../utils/breakpoint";
import { FormProvider, useForm } from "react-hook-form";
import { space } from "../../utils/space";
import {
  CreateProjectFormProps,
  CreateProjectFormData,
  FormScreenObject,
} from "./types";
import { FormScreen } from "./components/form-screens/form-screen";
const { stepper, createProject, projectDetails, addProject } =
  translations.us.projectForm;

export const formScreens: FormScreenObject[] = [
  {
    title: addProject.headers.main,
    titleSecondary: addProject.headers.subheader,
    stepperTitle: stepper.startFirstProject,
    Component: AddNewProject,
  },
  {
    title: projectDetails.headers.main,
    titleSecondary: projectDetails.headers.subheader,
    stepperTitle: stepper.projectDetails,
    Component: ProjectDetails,
  },
  {
    title: createProject.headers.main,
    stepperTitle: stepper.createProject,
    Component: CreateProject,
  },
];

const defaultValues: Partial<CreateProjectFormData> = {
  contactEmail: "mail@mail.com",
  workersCount: "0",
  postProductLaunches: createProject.inputs.postProductLaunchChoices[0],
  goals: projectDetails.inputs.goalsChoices[0],
};

export const CreateProjectForm: React.FC<CreateProjectFormProps> = (props) => {
  const { currentStep, next, prev, onSubmit } = props;
  const formMethods = useForm<CreateProjectFormData>({ defaultValues });
  const {
    Component: FormScreenData,
    title,
    titleSecondary,
  } = formScreens[currentStep];

  const isLastScreen = currentStep === formScreens.length - 1;

  return (
    <FormProvider {...formMethods}>
      <FormScreen title={title} titleSecondary={titleSecondary}>
        <FormScreenData />
      </FormScreen>
      <Wrap>
        <Wrap
          sx={{
            maxWidth: space(12),
            marginRight: space(3.2),
            width: "100%",
            [breakpoint("max", "sm")]: {
              maxWidth: "100%",
            },
          }}
        >
          <Button secondary onClick={prev}>
            Prev
          </Button>
        </Wrap>
        <Wrap
          sx={{
            maxWidth: space(32.8),
            width: "100%",
            [breakpoint("max", "sm")]: {
              maxWidth: "100%",
            },
          }}
        >
          <Button
            onClick={isLastScreen ? formMethods.handleSubmit(onSubmit) : next}
          >
            Next
          </Button>
        </Wrap>
      </Wrap>
    </FormProvider>
  );
};
