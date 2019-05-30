import * as React from "react";
import { Wrapper } from "../Wrapper";
import { data } from "./data";
import { Copyright } from "./components/Copyright";
import { Navigation } from "./components/Navigation";

export const Footer: React.FC = React.memo(() => {
  const { copyright: copyrightText, elements } = data;

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
        <Navigation elements={elements} />
        <Copyright text={copyrightText} />
      </footer>
    </Wrapper>
  );
});

Footer.displayName = "Footer";
