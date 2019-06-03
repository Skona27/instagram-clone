import * as React from "react";
import { IUsername } from "../types";

export const Username: React.FC<IUsername> = React.memo(({ name }) => {
  return (
    <span
      css={{
        // display: 'flex',
        fontFamily: "Arial",
        fontSize: 14,
        fontWeight: "bold"
        // paddingLeft: 10
      }}
    >
      {name}
    </span>
  );
});

Username.displayName = "Username";
