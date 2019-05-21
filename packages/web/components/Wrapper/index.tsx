import * as React from "react";

interface IProps {
  backgroundColor?: string;
  padding?: string;
}

export const Wrapper: React.FC<IProps> = React.memo(
  ({ backgroundColor = "white", padding = "1rem 0", children, ...rest }) => {
    return (
      <section css={{ backgroundColor, padding }} {...rest}>
        <div css={{ width: "100%", margin: "0 auto" }}>{children}</div>
      </section>
    );
  }
);
