import * as React from "react";

interface IProps {

}

export const Logo: React.FC<IProps> = React.memo(({}) => {
    return(
        <h1 css={{color: "white",
        fontSize: "35px",
        letterSpacing: "2px",
        fontStyle: "oblique"
    }}
    >INSTACLONE</h1>
    );
});

