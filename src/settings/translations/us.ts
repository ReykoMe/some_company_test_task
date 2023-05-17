export const us = {
  projectForm: {
    stepper: {
      startFirstProject: "Start First Project",
      projectDetails: "Project Details",
      createProject: "Create Project",
    },
    addProject: {
      headers: {
        main: "To Create Quest you need firstly create Project",
        subheader: "Add New Project",
      },
      inputs: {
        labels: {
          projectName: "Project Name (It can be changed later)",
          projectUrl: "Project URL (It cannot be changed after creation)",
          projectType: "Project Category (It cannot be changed after creation)",
        },
        projectTypeChoices: [
          "NFT",
          "GameFi",
          "DeFi",
          "DAO",
          "SocialFi",
          "Metaverse",
          "Tools",
          "Ecosystem",
          "Others",
        ],
      },
      buttons: {
        addProject: "Add Project",
      },
    },
    projectDetails: {
      headers: {
        main: "Project Details",
        subheader: "What is your main goal with AlphaQuest?",
      },
      inputs: {
        goalsChoices: [
          "Grow My Community",
          "Activate Existing Members",
          "Understand My Members",
          "Other",
        ],
      },
      buttons: {
        back: "Back",
        continue: "Continue",
      },
    },
    createProject: {
      headers: {
        main: "Create Project",
      },
      inputs: {
        labels: {
          workersCount: "How many full-time workers on the project?",
          postProductLaunch: "Are you pre or post product launch?",
          contactEmail: "Contact Email",
        },
        postProductLaunchChoices: ["Pre Product", "Post Product"],
      },
      buttons: {
        back: "Back",
        createProject: "Create project",
      },
    },
    summaryModal: {
      labels: {
        projectName: "Project name",
        projectUrl: "Project URL",
        projectType: "Project Category",
        goals: "Goals",
        workersCount: "Full time workers",
        postProductLaunches: "Pre/Post product",
        contactEmail: "Contact email",
      },
      buttons: {
        submit: "Submit"
      }
    },
  },
};
