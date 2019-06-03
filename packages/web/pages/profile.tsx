import * as React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Wrapper } from "../components/Wrapper";
import { indexPage } from "../data/page";
import { IPageData } from "../api/types";

const Profile = (pageData: IPageData) => {
  const { header, footer } = pageData;
  return (
    <>
      <Header {...header} />
      <Wrapper>
        <p>Profile page</p>
      </Wrapper>
      <Footer {...footer} />
    </>
  );
};

Profile.getInitialProps = () => {
  return indexPage;
};

export default Profile;
