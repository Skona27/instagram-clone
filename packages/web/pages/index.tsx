import * as React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { indexPage } from "../data/page";
import { IIndexPageData } from "../api/types";
import { Wrapper } from "../components/Wrapper";
import axios from "axios";
import { IPost } from "../components/Post/types";
import { Post } from "../components/Post";

const Index = ({ posts }: IIndexPageData) => {
  const { header, footer } = indexPage;

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
  const response = await axios.get<IPost[]>("http://localhost:4000/posts");
  return { posts: response.data };
};

export default Index;
