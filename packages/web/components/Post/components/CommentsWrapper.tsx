import * as React from "react";

export const CommentsWrapper: React.FC = React.memo(props => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        padding: "0 5px 0 5px"
      }}
    >
      {props.children}
    </div>
  );
});

CommentsWrapper.displayName = "CommentsWrapper";
