import * as React from "react";
import { Wrapper } from "../Wrapper";
import { Avatar } from "./components/avatar";
import { Picture } from "./components/Picture";
import { Header } from "./components/Header";
import { Username } from "./components/Username";
import { CommentsWrapper } from "./components/CommentsWrapper";
import { Comment } from "./components/Comment";
import { comments } from "./data";
import { Sidebar } from "./components/Sidebar";
import { SocialPanel } from "./components/SocialPanel";

export const Post: React.FC = React.memo(() => {
  return (
    <Wrapper>
      <article
        css={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <Picture image="https://i.imgur.com/gloYxYP.jpg" />
        <Sidebar>
          <div>
            <Header>
              <Avatar
                image="https://i.imgur.com/Q77mG4Q.jpg"
                profileLink="#"
                height={40}
              />
              <Username name="elon_musk" css={{ paddingLeft: 10 }} />
              &nbsp;&bull;&nbsp;<a href="#">Follow</a>
              {
                // <Options />
              }
            </Header>
            <CommentsWrapper>
              {comments.map((comment, index) => (
                <Comment
                  username={comment.username}
                  avatar={comment.avatar}
                  date={comment.date}
                  text={comment.text}
                  key={index}
                />
              ))}
            </CommentsWrapper>
          </div>
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              alignContent: "flex-end"
            }}
          >
            <SocialPanel />
          </div>
        </Sidebar>
      </article>
    </Wrapper>
  );
});
