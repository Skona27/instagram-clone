import * as React from "react";
import { useTheme } from "@insta/ui";
import { IColor } from "@insta/ui/dist/theme/types";

interface IProps {
  backgroundColor?: IColor;
  padding?: string;
}

export const Wrapper: React.FC<IProps> = React.memo(
  ({ backgroundColor, padding = "1rem 0", children, ...rest }) => {
    const { colors } = useTheme();
    const bgColor =
      backgroundColor && backgroundColor in colors
        ? colors[backgroundColor]
        : colors.white;

    return (
      <section css={{ backgroundColor: bgColor, padding }}>
        <div css={{ width: 1050, margin: "0 auto" }} {...rest}>
          {children}
        </div>
      </section>
    );
  }
);
