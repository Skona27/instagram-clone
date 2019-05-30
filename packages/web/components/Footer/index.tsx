import * as React from "react";
import { Wrapper } from "../Wrapper";
import { data } from "./data";
import { Copyright } from "./components/Copyright";
import { BottomNav } from "./components/BottomNav";

export const Footer: React.FC = React.memo(() => {
  const { copyright, elements } = data;

  return (
    <Wrapper>
      <footer
        css={{
          height: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <BottomNav elements={elements} />
        <Copyright text={copyright} />
      </footer>
    </Wrapper>
  );
});

Footer.displayName = "Footer";
