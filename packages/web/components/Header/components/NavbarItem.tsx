import * as React from "react";
import { ILink } from "../types";

export const NavbarItem: React.FC<ILink> = React.memo(({ href, text }) => {
  return (
    <li
      css={{
        ":not(:last-of-type)": {
          marginRight: 30
        }
      }}
    >
      <a
        href={href}
        css={{
          textDecoration: "none",
          color: "#003569",
          textTransform: "uppercase",
          fontWeight: 600,
          letterSpacing: 1,
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

NavbarItem.displayName = "NavbarItem";
