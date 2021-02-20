import * as React from 'react';
import { IconButton } from '@abdt/ornament';
import { Avatar } from './Avatar';
import useStyles from './useStyles';

const Profile: React.FC = () => {
    const classes = useStyles();
    return (
        <IconButton
            color="inherit"
            aria-label="open drawer"
            className={classes.avatar}
        >
            <Avatar />
        </IconButton>
    );
};

export default Profile;
