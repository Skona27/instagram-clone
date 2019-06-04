import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faShareSquare,
  faBookmark
} from "@fortawesome/free-regular-svg-icons";
import { InputComment } from "./InputComment";
import { post } from "../data";

export const SocialPanel: React.FC = React.memo(() => {
  // const days = (new Date()).

  const iconStyle = {
    width: "20px !important",
    height: "20px !important",
    margin: "0 5px 0 5px",
    color: "#6f6f6f",
    cursor: "pointer"
  };
  return (
    <div
      css={{
        borderTop: "1px solid #efefef"
      }}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          padding: "15px 5px 5px 5px",
          borderBottom: "1px solid #efefef"
        }}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "0 5px 0 5px"
          }}
        >
          <div>
            <FontAwesomeIcon icon={faHeart} css={iconStyle} />
            <FontAwesomeIcon icon={faComment} css={iconStyle} />
            <FontAwesomeIcon icon={faShareSquare} css={iconStyle} />
          </div>
          <div>
            <FontAwesomeIcon icon={faBookmark} css={iconStyle} />
          </div>
        </div>
        <div
          css={{
            padding: 10,
            fontFamily: "Arial",
            fontSize: 14,
            fontWeight: "bold"
          }}
        >
          {post.likes_count} {post.likes_count === 1 ? "like" : "likes"}
        </div>
        <div
          css={{
            padding: "0 0 10px 10px",
            fontFamily: "Arial",
            fontSize: 11,
            color: "#666",
            textTransform: "uppercase"
          }}
        >
          5 days ago
        </div>
      </div>
      <div>
        <InputComment />
      </div>
    </div>
  );
});

SocialPanel.displayName = "SocialPanel";
