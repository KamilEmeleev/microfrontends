import * as React from 'react';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Badge,
    Box,
    IconButton,
    AppBar as OrnamentAppBar,
    Toolbar,
} from '@abdt/ornament';
import { Alert, Search, Widget, Abb } from '@abdt/icons';
import cn from 'classnames';
import { Profile } from '@components';
import useStyles from './useStyles';

interface AppBarProps {
    open?: boolean;
    onClick?: () => void;
}

const AppBar: React.FC<AppBarProps> = ({ onClick, open }) => {
    const classes = useStyles();
    const history = useHistory();

    const handleOnClick = useCallback(() => history.push('/'), [history]);

    return (
        <OrnamentAppBar position="fixed" className={classes.panel}>
            <Toolbar variant="dense" className={classes.toolbar}>
                <IconButton className={classes.logo} onClick={handleOnClick}>
                    <Abb />
                </IconButton>
                <Box mb={'48px'} />
                <Box mb={'12px'}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        className={classes.icon}
                    >
                        <Search />
                    </IconButton>
                </Box>
                <Box mb={'12px'}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={onClick}
                        className={cn(classes.icon, {
                            [classes.iconIsActive]: open,
                        })}
                    >
                        <Widget />
                    </IconButton>
                </Box>
                <Box mb={'12px'}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        className={classes.icon}
                    >
                        <Badge
                            badgeContent="3"
                            color="error"
                            component="span"
                            variant="dot"
                            classes={{
                                badge: classes.indicator,
                            }}
                        >
                            <Alert color="#FF9A85" />
                        </Badge>
                    </IconButton>
                </Box>
                <Profile />
            </Toolbar>
        </OrnamentAppBar>
    );
};

export default AppBar;
