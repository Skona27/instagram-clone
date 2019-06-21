import * as React from "react";
import { IComment } from "../types";

export const Comment: React.FC<IComment> = React.memo(({ content, author }) => {
  return (
    <div css={{ display: "flex", padding: "10px 15px", fontSize: 14 }}>
      <a href="#">
        <img
          src={author.photoUrl}
          alt={`avatar-${author.login}`}
          css={{ height: 30, borderRadius: "50%", marginRight: 10 }}
        />
      </a>

      <div css={{ lineHeight: "20px", marginTop: 5 }}>
        <span
          css={{
            fontFamily: "Arial",
            fontWeight: "bold",
            fontSize: 14,
            marginRight: 5
          }}
        >
          {author.login}
        </span>
        {content}
      </div>
    </div>
  );
});

Comment.displayName = "SingleComment";
