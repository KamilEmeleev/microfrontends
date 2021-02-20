import { createStyles, makeStyles, Theme } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            marginLeft: 64,
            zIndex: 10,
            position: 'relative',
            backgroundColor: '#221739',
            '&:before': {
                content: '""',
                position: 'absolute',
                width: 8,
                height: '100vh',
                backgroundColor: theme.palette.secondary.main,
            },
            '&:after': {
                content: '""',
                width: 8,
                height: '100vh',
                position: 'absolute',
                backgroundColor: '#221739',
                borderRadius: '8px 0 0 8px',
            },
        },
        drawerPaper: {
            marginLeft: 64,
            width: drawerWidth,
            backgroundColor: 'transparent',
            border: 'none',
        },
    })
);

export default useStyles;
