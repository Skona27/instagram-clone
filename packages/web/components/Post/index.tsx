import * as React from "react";
import { Wrapper } from "../Wrapper";
import { Avatar } from "./components/avatar";
import { Username } from "./components/Username";
import { Comment } from "./components/Comment";
import { SocialPanel } from "./components/SocialPanel";
import { comments, photo, author } from "./data";

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
        <img
          src={photo.src}
          alt={photo.alt}
          css={{
            height: 600
          }}
        />
        <section
          css={{
            display: "flex",
            flexDirection: "column",
            width: 300,
            border: "1px solid #efefef",
            justifyContent: "space-between"
          }}
        >
          <div>
            <header
              css={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: 300,
                padding: "20px 20px 20px 15px",
                borderBottom: "1px solid #efefef",
                fontSize: 14
              }}
            >
              <Avatar {...author.avatar} height={40} />
              <Username name={author.name} css={{ paddingLeft: 10 }} />
              &nbsp;&bull;&nbsp;<a href="#">Follow</a>
              {
                // <Options />
              }
            </header>
            <section
              css={{
                display: "flex",
                flexDirection: "column",
                padding: "0 5px 0 5px"
              }}
            >
              {comments.map((comment, index) => (
                <Comment {...comment} key={index} />
              ))}
            </section>
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
        </section>
      </article>
    </Wrapper>
  );
});
