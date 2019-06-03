import * as React from "react";
import { IAvatar } from "../types";

export const Avatar: React.FC<IAvatar> = React.memo(
  ({ image, profileLink, height = 40 }) => {
    return (
      <a href={profileLink}>
        <img
          src={image.src}
          alt={image.alt}
          css={{
            height,
            borderRadius: "50%",
            marginRight: 10
          }}
        />
      </a>
    );
  }
);

Avatar.displayName = "Avatar";
