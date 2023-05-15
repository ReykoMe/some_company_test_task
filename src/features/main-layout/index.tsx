import { ContentContainer, LayoutContainer, SidebarContainer } from "./styles";
import { MainLayoutProps } from "./types";

export const MainLayout: React.FC<React.PropsWithChildren<MainLayoutProps>> = (props) => {
  const { children, sidebar } = props
  return (
    <LayoutContainer>
      {sidebar && <SidebarContainer>{sidebar}</SidebarContainer>}
      <ContentContainer>{children}</ContentContainer>
    </LayoutContainer>
  );
}