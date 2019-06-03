import * as React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Post } from "../components/Post";
import { indexPage } from "../data/page";
import { IIndexPageData } from "../api/types";
import { Wrapper } from "../components/Wrapper";
import axios from "axios";

const Index = (pageData: IIndexPageData) => {
  const { header, footer, posts } = pageData;

  return (
    <>
      <Header {...header} />
      <Wrapper>
        {posts.map((post, index) => (
          <Post {...post} key={index} />
        ))}
      </Wrapper>
      <Footer {...footer} />
    </>
  );
};

Index.getInitialProps = async () => {
  const response = await axios.get(
    "https://api.jsonbin.io/b/5cfbb9062132b7426dfd9506"
  );
  return response.data;
};

export default Index;
