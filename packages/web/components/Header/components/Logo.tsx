import * as React from "react";
import { ILogo } from "../types";

export const Logo: React.FC<ILogo> = React.memo(({ url, title, href }) => {
  return (
    <a href={href} css={{ height: 40 }}>
      <img
        src={url}
        alt={title}
        css={{
          height: "100%"
        }}
      />
    </a>
  );
});

Logo.displayName = "Logo";
