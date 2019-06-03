import * as React from "react";
import { IPicture } from "../types";

export const Picture: React.FC<IPicture> = React.memo(({ image }) => {
  return (
    <img
      src={image}
      alt=""
      css={{
        height: 600
      }}
    />
  );
});

Picture.displayName = "Picture";
