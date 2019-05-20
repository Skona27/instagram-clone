import React from 'react';

import Logo from './Logo';
import NavigationButtons from './NavigationButtons';

interface IProps {
  height: number;
}

const Header: React.FC<IProps> = React.memo(({ height }) => {
  const styles = {
    backgroundColor: '#26abff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height,
    padding: 20
  };
  return (
    <div css={styles}>
      <Logo title="InstaClone" css={{ color: '#fff' }} />
      <NavigationButtons />
    </div>
  );
});

Header.displayName = 'Header';

export default Header;
