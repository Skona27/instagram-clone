import * as React from "react";
import { IAvatar } from "../types";

export const Avatar: React.FC<IAvatar> = React.memo(
  ({ image, profileLink, height }) => {
    return (
      <a href={profileLink}>
        <img
          src={image}
          alt="Avatar"
          css={{
            height: height ? height : 40,
            borderRadius: "50%",
            marginRight: 10
          }}
        />
      </a>
    );
  }
);

Avatar.displayName = "Avatar";
