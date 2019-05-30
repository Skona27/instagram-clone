import * as React from "react";
import { BottomNavItem } from "./BottomNavItem";
import { IBottomNav } from "../types";

export const BottomNav: React.FC<IBottomNav> = React.memo(({ elements }) => {
  return (
    <nav>
      <ul css={{ listStyle: "none", display: "flex" }}>
        {elements.map((link, index) => (
          <BottomNavItem key={index} text={link.text} href={link.href} />
        ))}
      </ul>
    </nav>
  );
});

BottomNav.displayName = "BottomNav";
