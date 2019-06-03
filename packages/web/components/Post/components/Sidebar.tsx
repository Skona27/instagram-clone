import * as React from "react";

export const Sidebar: React.FC = React.memo(({ children }) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        width: 300,
        border: "1px solid #efefef",
        justifyContent: "space-between"
      }}
    >
      {children}
    </div>
  );
});

Sidebar.displayName = "Sidebar";
