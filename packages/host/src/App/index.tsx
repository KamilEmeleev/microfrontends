import * as React from 'react';
import { useSnackbar } from 'notistack';
import { useState, useCallback, useEffect } from 'react';
import { Box, Drawer, Typography } from '@abdt/ornament';
import { ErrorBoundary } from 'react-error-boundary';

import '@abdt/fonts';
import './App.css';

import {
    Navigation,
    Message,
    AppBar,
    GenerateMessageType,
    Main,
} from '@components';
import { useEventListener } from '@hooks';

import useStyles from './useStyles';

const App: React.FC = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const generateMessage = useCallback(
        (event: CustomEvent<GenerateMessageType>): void => {
            const id = enqueueSnackbar(
                <Message {...event?.detail} close={() => closeSnackbar(id)} />
            );
        },
        []
    );

    useEventListener(
        'host:root-generate-message-event',
        generateMessage as EventListener
    );

    useEffect(() => {
        document.dispatchEvent(
            new CustomEvent('host:root-generate-message-event', {
                detail: {
                    variant: 'info',
                    title: '👋 Привет!',
                    subtitle: `Demo-demo-demo - Делаем Microfrontends`,
                },
            })
        );
    }, []);

    const handleClickOpen = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.root}>
            <AppBar open={open} onClick={handleClickOpen} />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Navigation />
            </Drawer>
            <Main open={open} />
        </div>
    );
};

export default App;
