import * as React from "react";
import { ILink } from "../types";
import { A } from "@insta/ui";

export const NavigationItem: React.FC<ILink> = React.memo(({ href, text }) => {
  return (
    <li
      css={{
        ":not(:last-of-type)": {
          marginRight: 20
        }
      }}
    >
      <A
        href={href}
        css={{
          textTransform: "uppercase",
          fontSize: 12,
          fontWeight: 600
        }}
      >
        {text}
      </A>
    </li>
  );
});

NavigationItem.displayName = "NavigationItem";
