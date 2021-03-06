import * as React from "react";
import { Socials } from "./components/Socials";
import { AuthorInfo } from "./components/AuthorInfo";
import { Comment } from "./components/Comment";
import { Form } from "./components/Form";
import { useTheme } from "@insta/ui";
import { IPost } from "./types";

export const Post: React.FC<IPost> = React.memo(
  ({ likes, createdAt, comments, description, media, author }) => {
    const { colors } = useTheme();

    // @TODO - Enable multiple photos on single post
    const singleMedia = media[0] || null;

    return (
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          margin: "0 50px",
          overflow: "hidden",
          ":not(:first-of-type)": { marginTop: 50 }
        }}
      >
        {singleMedia && (
          <img
            src={singleMedia.src}
            alt={singleMedia.alt}
            css={{
              flexBasis: "60%",
              height: 600,
              cursor: "pointer",
              opacity: 0.85,
              transition: "opacity .15s",
              ":hover": {
                opacity: 1
              }
            }}
          />
        )}

        <div
          css={{
            width: 300,
            border: `1px solid ${colors.light_grey}`,
            flexBasis: "40%"
          }}
        >
          <AuthorInfo {...author} />

          <div css={{ height: 385, overflowY: "scroll" }}>
            <Comment {...{ author, content: description, createdAt }} />

            {comments.map((comment, index) => (
              <Comment {...comment} key={index} />
            ))}
          </div>

          <Socials {...{ likes, createdAt }} />
          <Form />
        </div>
      </div>
    );
  }
);
