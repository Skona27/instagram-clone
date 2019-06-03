import * as React from "react";
import { ILink } from "../types";
import { NavbarItem } from "./NavbarItem";
import { withRouter, WithRouterProps } from "next/router";

interface IProps {
  elements: ILink[];
}

const NavbarComponent: React.FC<IProps & WithRouterProps> = React.memo(
  ({ elements, router }) => {
    if (!router) {
      return null;
    }

    return (
      <nav>
        <ul css={{ listStyle: "none", display: "flex" }}>
          {elements.map((link, index) => (
            <NavbarItem
              key={index}
              text={link.text}
              href={link.href}
              isActive={link.href === router.route}
            />
          ))}
        </ul>
      </nav>
    );
  }
);

NavbarComponent.displayName = "Navbar";
export const Navbar = withRouter(NavbarComponent);
