import * as React from "react";
import { useTheme } from "@insta/ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faShareSquare,
  faBookmark
} from "@fortawesome/free-regular-svg-icons";

interface IProps {
  likes: number;
  createdAt: number;
}

export const Socials: React.FC<IProps> = React.memo(({ likes, createdAt }) => {
  const { colors } = useTheme();

  const iconStyle = {
    color: colors.grey,
    cursor: "pointer",
    "&:not(:first-of-type)": { marginLeft: 15 },
    "&:last-of-type": { marginLeft: "auto" },
    width: "20px !important",
    height: "20px !important"
  };

  return (
    <div
      css={{
        borderTop: `1px solid ${colors.light_grey}`,
        padding: "15px 20px",
        p: { fontFamily: "Arial" }
      }}
    >
      <div css={{ display: "flex" }}>
        <FontAwesomeIcon icon={faHeart} css={iconStyle} />
        <FontAwesomeIcon icon={faComment} css={iconStyle} />
        <FontAwesomeIcon icon={faShareSquare} css={iconStyle} />
        <FontAwesomeIcon icon={faBookmark} css={iconStyle} />
      </div>

      <p css={{ fontSize: 14, fontWeight: "bold", marginTop: 10 }}>
        {likes} likes
      </p>
      <p
        css={{
          fontSize: 10,
          color: colors.grey,
          textTransform: "uppercase",
          marginTop: 5
        }}
      >
        {new Intl.DateTimeFormat("pl-PL").format(createdAt)}
      </p>
    </div>
  );
});

Socials.displayName = "Socials";
