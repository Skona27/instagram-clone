import * as React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Wrapper } from "../components/Wrapper";
import { indexPage } from "../data/page";
import { IPageData } from "../api/types";

const Settings = (pageData: IPageData) => {
  const { header, footer } = pageData;
  return (
    <>
      <Header {...header} />
      <Wrapper>
        <p>Settings page</p>
      </Wrapper>
      <Footer {...footer} />
    </>
  );
};

Settings.getInitialProps = () => {
  return indexPage;
};

export default Settings;
