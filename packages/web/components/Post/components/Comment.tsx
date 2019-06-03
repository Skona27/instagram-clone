import * as React from "react";
import { IComment } from "../types";
import { Avatar } from "./avatar";
import { Username } from "./Username";

export const Comment: React.FC<IComment> = React.memo(
  ({ avatar, username, text }) => {
    return (
      <div
        css={{
          display: "flex",
          flexDirection: "row",
          padding: 10,
          fontSize: 14
        }}
      >
        <div>
          <Avatar
            image={avatar.image}
            profileLink={avatar.profileLink}
            height={30}
          />
        </div>
        <div
          css={{
            lineHeight: "20px"
          }}
        >
          <Username name={username.name} /> {text}
        </div>
      </div>
    );
  }
);

Comment.displayName = "Comment";
