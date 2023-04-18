import React, { useEffect, type FC, type ReactNode } from 'react';

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
import { useSnackbar } from '@ornament-ui/kit/Snackbar';

import logo from '../abb_logo.svg';

import './App.css';

export const App: FC<{ ThemeToggle?: ReactNode }> = ({ ThemeToggle }) => {
  const { pushMessage } = useSnackbar();

  useEffect(() => {
    pushMessage({ title: 'Demo-demo-demo – Making Microfrontends' });
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
        <Divider color="secondary" style={{ visibility: 'hidden' }} />
        <AppBarFooter>
          <Profile />
        </AppBarFooter>
      </AppBar>
      <Main />
    </div>
  );
};
