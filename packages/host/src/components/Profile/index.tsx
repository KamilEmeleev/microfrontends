import * as React from 'react';
import { IconButton, styled } from '@abdt/ornament';
import { OwlIndigo } from '@abdt/avatars';

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
