import { CreateProjectSummaryProps, TitlesMap } from "./types";
import { translations } from "../../../../settings/translations";
import { CreateProjectFormData } from "../../types";
import { space } from "../../../../utils/space";
import { Wrap } from "../../../../components/wrap";
import { Typography } from "../../../../components/typography";
import { breakpoint } from "../../../../utils/breakpoint";
const { labels } = translations.us.projectForm.summaryModal;

const titlesMap: TitlesMap = {
  contactEmail: labels.contactEmail,
  goals: labels.goals,
  postProductLaunches: labels.postProductLaunches,
  projectName: labels.projectName,
  projectType: labels.projectType,
  projectUrl: labels.projectUrl,
  workersCount: labels.workersCount,
};

export const CreateProjectSummary: React.FC<CreateProjectSummaryProps> = (
  props
) => {
  const { values } = props;
  return (
    <Wrap
      sx={{
        padding: space(3),
        flexDirection: "column",
        width: "100%",
        minWidth: space(50),
        gap: space(1),
        [breakpoint("max", "sm")]: {
          minWidth: space(20),
        },
      }}
    >
      <Typography component="h2">Summary info</Typography>
      {Object.entries(values).map((el) => {
        const key = el[0] as keyof CreateProjectFormData;
        const value = el[1];
        const title = titlesMap[key];
        return (
          <Wrap sx={{ flexDirection: "column" }}>
            <Typography component="h2" color="tertiary">
              {title}
            </Typography>
            <Typography component="default">{value}</Typography>
          </Wrap>
        );
      })}
    </Wrap>
  );
};
