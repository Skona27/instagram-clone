import React from "react";

import { Logo } from "./Logo";
import { NavigationButtons } from "./NavigationButtons";

interface IProps {
  height: number;
}

export const Header: React.FC<IProps> = React.memo(({ height }) => {
  return (
    <div
      css={{
        backgroundColor: "#26abff",
        display: "flex",
        flexDirection: "row",
        height,
        justifyContent: "space-between",
        padding: 20
      }}
    >
      <Logo title="InstaClone" css={{ color: "#fff" }} />
      <NavigationButtons />
    </div>
  );
});

Header.displayName = "Header";
