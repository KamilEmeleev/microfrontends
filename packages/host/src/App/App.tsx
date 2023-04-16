import * as React from 'react';

import { useSnackbar } from 'notistack';
import useEventListener from 'use-typed-event-listener';

import { useState, useCallback, useEffect, useContext } from 'react';

import { Drawer } from '@abdt/ornament';

import '@abdt/fonts';
import './App.css';

import {
  Navigation,
  Message,
  AppBar,
  GenerateMessageType,
  Main,
} from '@components';

import { AppContext } from './AppContext';
import useStyles from './useStyles';

const App: React.FC = () => {
  const classes = useStyles();
  const { frame } = useContext(AppContext);

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

  const handleMessage = useCallback(
    (event) => {
      if (frame?.src.indexOf(event.origin) !== -1) {
        const { data } = event;
        const { type, payload } = data;

        if (type === 'host:root-generate-message-event') {
          document.dispatchEvent(
            new CustomEvent('host:root-generate-message-event', {
              detail: payload,
            })
          );
        }
      }
    },
    [frame]
  );

  useEventListener(window, 'message', handleMessage);

  useEventListener(
    document,
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
