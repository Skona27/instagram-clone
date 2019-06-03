import * as React from "react";

interface IProps {
  name: string;
}

export const Username: React.FC<IProps> = React.memo(({ name }) => {
  return (
    <span
      css={{
        fontFamily: "Arial",
        fontSize: 14,
        fontWeight: "bold"
      }}
    >
      {name}
    </span>
  );
});

Username.displayName = "Username";
