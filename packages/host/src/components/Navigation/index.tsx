import * as React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { ChevronUp, ChevronDown, Point } from '@abdt/icons';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
} from '@abdt/ornament';
import { colors } from '@abdt/design-tokens';
import useStyles from './useStyles';

const Navigation: React.FC = () => {
    const [open, setOpen] = useState(true);
    const location = useLocation();
    const classes = useStyles();

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List component="nav" classes={{ root: classes.navigation }}>
            <ListItem
                dense
                button
                onClick={handleClick}
                classes={{
                    button: classes.listButton,
                    gutters: classes.gutters,
                }}
            >
                <ListItemIcon className={classes.icon}>
                    <Point color={colors.yellow700} />
                </ListItemIcon>
                <ListItemText
                    primary="Modules"
                    classes={{ primary: classes.text }}
                />
                {open ? (
                    <ChevronUp color={colors.nightSky300} />
                ) : (
                    <ChevronDown color={colors.nightSky300} />
                )}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div">
                    <Link to="/app1" className={classes.link}>
                        <ListItem
                            dense
                            button
                            classes={{
                                root: classes.nested,
                                button: classes.listButton,
                            }}
                            disableTouchRipple
                            disableRipple
                        >
                            <ListItemText
                                classes={{
                                    primary: cn(classes.text, {
                                        [classes.isActive]:
                                            location.pathname === '/app1',
                                    }),
                                }}
                                primary="App 1"
                            />
                        </ListItem>
                    </Link>
                    <Link to="/app2" className={classes.link}>
                        <ListItem
                            dense
                            button
                            classes={{
                                root: classes.nested,
                                button: classes.listButton,
                            }}
                            disableTouchRipple
                            disableRipple
                        >
                            <ListItemText
                                classes={{
                                    primary: cn(classes.text, {
                                        [classes.isActive]:
                                            location.pathname === '/app2',
                                    }),
                                }}
                                primary="App 2"
                            />
                        </ListItem>
                    </Link>
                </List>
            </Collapse>
        </List>
    );
};

export default React.memo(Navigation);
