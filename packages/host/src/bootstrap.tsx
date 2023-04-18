import React, { useState } from 'react';

import { DarkIcon, LightMIcon } from '@ornament-ui/icons';
import { IconButton } from '@ornament-ui/kit/IconButton';
import { spacing } from '@ornament-ui/kit/MixSpacing';
import { SnackbarProvider } from '@ornament-ui/kit/Snackbar';
import {
  ThemeProvider,
  themeOrnamentDefault,
  themeOrnamentDark,
  type Theme,
} from '@ornament-ui/kit/ThemeProvider';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { EventBusProvider } from '@components';

import { App } from './App';

const Root = () => {
  const themes: { [key in 'default' | 'dark']: Theme } = {
    default: themeOrnamentDefault,
    dark: themeOrnamentDark,
  };

  const [themeName, setThemeName] = useState<'default' | 'dark'>('default');

  const changeTheme = () => {
    setThemeName(themeName === 'default' ? 'dark' : 'default');
  };

  const ThemeToggle: React.FC = () => {
    return (
      <IconButton
        variant="function"
        className={spacing({ ml: 'auto' })}
        style={{
          color: 'var(--color-space-space-20)',
        }}
        icon={themeName === 'default' ? DarkIcon : LightMIcon}
        onClick={changeTheme}
      />
    );
  };

  return (
    <ThemeProvider theme={themes[themeName]}>
      <SnackbarProvider
        lifetime={10000}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <EventBusProvider>
          {/* TODO: migrate to react-router-dom@6 */}
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <BrowserRouter>
            <App ThemeToggle={<ThemeToggle />} />
          </BrowserRouter>
        </EventBusProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

const rootElement = document.getElementById('root');
const root = rootElement && createRoot(rootElement);

root?.render(<Root />);
