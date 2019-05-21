import * as React from "react";
import {Logo} from "./Logo";
import {NavBar} from "./navBar";

interface IProps {
    height: number
}

export const Header: React.FC<IProps> = React.memo(({height}) => {
  return(
      <div css={{
        listStyle: "none",
        justifyContent: "space-around",
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        backgroundColor:'#3C1A5B',
        width: "100%",
        fontFamily: "helvetica",
        height,
       }}>
          <Logo/>
            <NavBar/>
      </div>
  );
});

