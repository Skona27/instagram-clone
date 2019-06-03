import * as React from "react";

export const Header: React.FC = React.memo(props => {
  return (
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
      {props.children}
    </header>
  );
});

Header.displayName = "PostHeader";
