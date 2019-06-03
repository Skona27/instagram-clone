import * as React from "react";
import { IAuthor } from "../types";
import { A, useTheme } from "@insta/ui";

export const AuthorInfo: React.FC<IAuthor> = React.memo(
  ({ name, photo, profileLink }) => {
    const { colors } = useTheme();

    return (
      <div
        css={{
          display: "flex",
          alignItems: "center",
          padding: 15,
          borderBottom: `1px solid ${colors.light_grey}`,
          fontSize: 14
        }}
      >
        <a href={profileLink}>
          <img
            src={photo.src}
            alt={photo.alt}
            css={{
              height: 40,
              borderRadius: "50%",
              marginRight: 10
            }}
          />
        </a>
        <span css={{ fontWeight: "bold", marginRight: 10 }}>{name}</span>

        <A href={profileLink}>Follow</A>
      </div>
    );
  }
);

AuthorInfo.displayName = "AuthorInfo";
