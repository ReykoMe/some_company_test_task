import { Component } from "../../styles";
import { FormScreenProps } from "../../types";
import { Typography } from "../../../../components/typography";

export const FormScreen: React.FC<React.PropsWithChildren<FormScreenProps>> = (
  props
) => {
  const { title, titleSecondary, children } = props;
  return (
    <Component.FormScreen.Root>
      <Component.FormScreen.TitleContainer>
        {title && <Typography color="tertiary">{title}</Typography>}
        {titleSecondary && (
          <Typography component="h2">{titleSecondary}</Typography>
        )}
      </Component.FormScreen.TitleContainer>
      <Component.FormScreen.Content>{children}</Component.FormScreen.Content>
    </Component.FormScreen.Root>
  );
};
