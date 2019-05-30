import * as React from "react";
import { NavigationItem } from "./NavigationItem";
import { IFooterNavigation } from "../types";

export const Navigation: React.FC<IFooterNavigation> = React.memo(
  ({ elements }) => {
    return (
      <nav>
        <ul css={{ listStyle: "none", display: "flex" }}>
          {elements.map((link, index) => (
            <NavigationItem key={index} text={link.text} href={link.href} />
          ))}
        </ul>
      </nav>
    );
  }
);

Navigation.displayName = "FooterNavigation";
