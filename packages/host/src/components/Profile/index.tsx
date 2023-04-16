import * as React from 'react';

import { OwlIndigo } from '@abdt/avatars';
import { IconButton, styled } from '@abdt/ornament';

const IconButtonStyled = styled(IconButton)`
  margin-top: auto;
  padding: 0;
`;

const Profile: React.FC = () => {
  return (
    <IconButtonStyled color="inherit" aria-label="open drawer">
      <OwlIndigo />
    </IconButtonStyled>
  );
};

export default Profile;
