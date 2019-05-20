import React from 'react';

interface IProps {
  title?: string;
  src?: string;
}

const NavigationButtons: React.FC<IProps> = React.memo(() => {
  const linkStyle = {
    display: 'flex',
    margin: '10px'
  };

  return (
    <div
      css={{
        color: '#fff',
        display: 'flex',
        flexDirection: 'row',
        fontFamily: 'Arial'
      }}
    >
      <div css={linkStyle}>Mój profil</div>
      <div css={linkStyle}>Powiadomienia</div>
      <div css={linkStyle}>Hot zdjęcia</div>
      <div css={linkStyle}>Ustawienia</div>
    </div>
  );
});

NavigationButtons.displayName = 'NavigationButtons';
export default NavigationButtons;
