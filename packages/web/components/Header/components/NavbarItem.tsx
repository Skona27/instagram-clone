import * as React from "react";
import { ILink } from "../types";
import { A, useTheme } from "@insta/ui";
import Link from "next/link";

export const NavbarItem: React.FC<ILink> = React.memo(
  ({ href, text, isActive = false }) => {
    const { colors } = useTheme();

    return (
      <li
        css={{
          ":not(:last-of-type)": {
            marginRight: 30
          }
        }}
      >
        <Link href={href}>
          <A
            css={{
              textTransform: "uppercase",
              fontWeight: 600,
              letterSpacing: 1,
              color: isActive ? colors.light_blue : colors.dark_blue
            }}
          >
            {text}
          </A>
        </Link>
      </li>
    );
  }
);

NavbarItem.displayName = "NavbarItem";
