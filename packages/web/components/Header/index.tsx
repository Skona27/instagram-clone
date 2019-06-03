import * as React from "react";
import { Wrapper } from "../Wrapper";
import { Logo } from "./components/Logo";
import { Navbar } from "./components/Navbar";
import { IHeader } from "./types";

export const Header: React.FC<IHeader> = React.memo(({ logo, elements }) => {
  return (
    <Wrapper>
      <header
        css={{
          height: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Logo {...logo} />
        <Navbar elements={elements} />
      </header>
    </Wrapper>
  );
});

Header.displayName = "Header";
