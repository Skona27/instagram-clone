import React from "react";

interface IProps {
  title: string;
  src?: string;
}

export const Logo: React.FC<IProps> = React.memo(({ title, src, ...rest }) => {
  if (src) {
    return <img src={src} alt={title} title={title} />;
  } else {
    return (
      <div css={{ display: "flex", fontFamily: "Arial" }} {...rest}>
        {title}
      </div>
    );
  }
});

Logo.displayName = "Logo";
