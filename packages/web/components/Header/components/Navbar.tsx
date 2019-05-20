import * as React from "react";
import { ILink } from "../types";
import { NavbarItem } from "./NavbarItem";

interface IProps {
  elements: ILink[];
}

export const Navbar: React.FC<IProps> = React.memo(({ elements }) => {
  return (
    <nav>
      <ul css={{ listStyle: "none", display: "flex" }}>
        {elements.map((link, index) => (
          <NavbarItem key={index} text={link.text} href={link.href} />
        ))}
      </ul>
    </nav>
  );
});

Navbar.displayName = "Navbar";
