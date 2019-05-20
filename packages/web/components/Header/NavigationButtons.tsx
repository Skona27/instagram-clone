import React from "react";

interface IProps {
  title?: string;
  src?: string;
}

export const NavigationButtons: React.FC<IProps> = React.memo(() => {
  const linkStyle = {
    display: "flex",
    margin: 10
  };

  const links = ["Mój profil", "Powiadomienia", "Hot pics", "Ustawienia"];

  return (
    <nav>
      <ul
        css={{
          color: "#fff",
          display: "flex",
          flexDirection: "row",
          fontFamily: "Arial"
        }}
      >
        {links.map(link => (
          <li css={linkStyle}>{link}</li>
        ))}
      </ul>
    </nav>
  );
});

NavigationButtons.displayName = "NavigationButtons";
