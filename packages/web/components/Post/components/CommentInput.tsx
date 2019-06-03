import * as React from "react";

export const CommentInput: React.FC = React.memo(() => {
  return (
    <form
      css={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15
      }}
    >
      <input
        css={{
          height: 20,
          border: "none"
        }}
        type="text"
        placeholder="Add a comment..."
      />
      <input
        css={{
          backgroundColor: "#fff",
          color: "#3897f0",
          opacity: 0.3,
          border: "none"
        }}
        type="submit"
        value="Post"
      />
    </form>
  );
});

CommentInput.displayName = "CommentInput";
