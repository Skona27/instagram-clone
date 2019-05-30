import * as React from "react";
import { ICopyright } from "../types";

export const Copyright: React.FC<ICopyright> = React.memo(({ text }) => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div
      css={{
        color: "#999",
        textTransform: "uppercase",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        fontSize: 12
      }}
    >{`\u00A9 ${year} ${text}`}</div>
  );
});

Copyright.displayName = "Copyright";
