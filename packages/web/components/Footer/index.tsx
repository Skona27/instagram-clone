import * as React from "react";
import { Wrapper } from "../Wrapper";
import { Copyright } from "./components/Copyright";
import { Navigation } from "./components/Navigation";
import { IFooter } from "./types";

export const Footer: React.FC<IFooter> = React.memo(
  ({ copyright, elements }) => {
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
          <Copyright text={copyright} />
        </footer>
      </Wrapper>
    );
  }
);

Footer.displayName = "Footer";
