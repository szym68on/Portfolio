import TitlePage from "./TitlePage";
import IconComponent from "./IconComponent";
import Header from "./Header";
import SectionInfo from "./SectionInfo";
import ImagePerson from "./ImagePerson";
import InfoPerson from "./InfoPerson";
import Main from "./Main";
import AsideInfo from "./AsideInfo";
import NavMain from "./NavMain";
import NavLinkInfo from "./NavLinkInfo";
import { Outlet } from "react-router-dom";
import Wrapper from "./Wrapper";
import { useState } from "react";
function AppLayout() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <Header>
        <TitlePage />
        <IconComponent setDarkMode={setDarkMode} darkMode={darkMode} />
      </Header>
      <SectionInfo>
        <ImagePerson />
        <InfoPerson />
      </SectionInfo>
      <Main>
        <AsideInfo />
        <Wrapper>
          <NavMain>
            <NavLinkInfo name="Project" path="/project" />
            <NavLinkInfo name="Resume" path="/resume" />
            <NavLinkInfo name="Contact" path="/contact" />
          </NavMain>
          <Outlet />
        </Wrapper>
      </Main>
    </>
  );
}

export default AppLayout;
