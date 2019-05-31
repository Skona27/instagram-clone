import * as React from "react";
import { ILink } from "../types";

export const NavigationItem: React.FC<ILink> = React.memo(({ href, text }) => {
  return (
    <li
      css={{
        ":not(:last-of-type)": {
          marginRight: 20
        }
      }}
    >
      <a
        href={href}
        css={{
          textDecoration: "none",
          color: "#003569",
          textTransform: "uppercase",
          fontSize: 12,
          fontWeight: 600,
          transition: "color .15s",
          ":hover": {
            color: "#3a80c5"
          }
        }}
      >
        {text}
      </a>
    </li>
  );
});

NavigationItem.displayName = "NavigationItem";
