import React, { useEffect, useContext, type FC, type ReactNode } from 'react';

import {
  Main,
  AppBar,
  AppBarHeader,
  AppBarHeaderLogo,
  AppBarBody,
  AppBarFooter,
  Navigation,
  Profile,
  AppBarHeaderTitle,
} from '@components';
import { Divider } from '@ornament-ui/kit/Divider';
import {
  useSnackbar,
  type SnackbarCommonProps,
} from '@ornament-ui/kit/Snackbar';
import { useEventListener } from '@ornament-ui/kit/useEventListener';

import logo from '../abb_logo.svg';

import { AppContext } from './AppContext';

import './App.css';

export type MessageType = {
  variant: SnackbarCommonProps['status'];
  title: string;
  subtitle: string;
};

const App: FC<{ ThemeToggle?: ReactNode }> = ({ ThemeToggle }) => {
  const { pushMessage } = useSnackbar();
  const { frame } = useContext(AppContext);

  // this receives messages from iframe
  useEventListener({
    eventName: 'message',
    handler: (e) => {
      const event = e as MessageEvent;

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
  });

  // this listens for custom events
  useEventListener({
    element: document,
    eventName: 'host:root-generate-message-event' as never,
    handler: (e) => {
      const event = e as CustomEvent<MessageType>;
      const { title, subtitle: description, variant: status } = event.detail;
      pushMessage({ title, description, status });
    },
  });

  useEffect(() => {
    document.dispatchEvent(
      new CustomEvent('host:root-generate-message-event', {
        detail: {
          variant: 'info',
          title: 'Demo-demo-demo – Making Microfrontends',
        },
      })
    );
  }, []);

  return (
    <div className="App">
      <AppBar>
        <AppBarHeader>
          <AppBarHeaderLogo>
            <img alt="Logo" src={logo} />
          </AppBarHeaderLogo>
          <AppBarHeaderTitle>Microfontends</AppBarHeaderTitle>
          {ThemeToggle}
        </AppBarHeader>
        <Divider color="secondary" />
        <AppBarBody>
          <Navigation />
        </AppBarBody>
        <AppBarFooter>
          <Profile />
        </AppBarFooter>
      </AppBar>
      <Main />
    </div>
  );
};

export default App;
