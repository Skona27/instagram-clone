import * as React from "react";
import { IComment } from "../types";

export const Comment: React.FC<IComment> = React.memo(({ text, author }) => {
  return (
    <div css={{ display: "flex", padding: "10px 15px", fontSize: 14 }}>
      <a href={author.profileLink}>
        <img
          src={author.photo.src}
          alt={author.photo.alt}
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
          {author.name}
        </span>
        {text}
      </div>
    </div>
  );
});

Comment.displayName = "SingleComment";
