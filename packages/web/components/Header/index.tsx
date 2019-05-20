import * as React from "react";
import { Wrapper } from "../Wrapper";
import { Logo } from "./components/Logo";
import { Navbar } from "./components/Navbar";
import { data } from "./data";

export const Header: React.FC = React.memo(() => {
  const { logo, elements } = data;

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
