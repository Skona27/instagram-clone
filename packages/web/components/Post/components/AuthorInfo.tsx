import * as React from "react";
import { IAuthor } from "../types";
import { A, useTheme } from "@insta/ui";

export const AuthorInfo: React.FC<IAuthor> = React.memo(
  ({ login, photoUrl }) => {
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
        <a href="#">
          <img
            src={photoUrl}
            alt={`avatar-${login}`}
            css={{
              height: 40,
              borderRadius: "50%",
              marginRight: 10
            }}
          />
        </a>
        <span css={{ fontWeight: "bold", marginRight: 10 }}>{login}</span>

        <A href={"#"}>Follow</A>
      </div>
    );
  }
);

AuthorInfo.displayName = "AuthorInfo";
