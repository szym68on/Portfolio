import TitlePage from "./TitlePage";
import IconComponent from "./IconComponent";
import Header from "./Header";
import SectionInfo from "./SectionInfo";
import ImagePerson from "./ImagePerson";
import InfoPerson from "./InfoPerson";
import Main from "./Main";
import AsideInfo from "./AsideInfo";

function AppLayout() {
  return (
    <>
      <Header>
        <TitlePage />
        <IconComponent />
      </Header>
      <SectionInfo>
        <ImagePerson />
        <InfoPerson />
      </SectionInfo>
      <Main>
        <AsideInfo />
      </Main>
    </>
  );
}

export default AppLayout;
