import * as React from "react";

interface IProps {
    
}

export const NavBar: React.FC<IProps> = React.memo(() => {

    const elems = ['account','upload','settings'];

    return(
        <ul css={{
            listStyle: "none",
            display: "flex",
            width: "50%",
            justifyContent: "space-around",
            }}
        >
            {elems.map(el => (
                <li><a href="" css={{
                    textDecoration: "none",
                    textTransform: "uppercase",
                    color: "#FFF748",
                    fontWeight: "bold",
                    ":hover": {borderBottom: " 2px solid #FFF748"},
                    letterSpacing: "2px"
                }}
                >{el}</a></li>
            ))}
        </ul>
    );
});

