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
import { EventBusProvider } from '@components';

import { App } from './App';
import { useAppBar } from './components/AppBar/AppBarContext';

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
    const { open } = useAppBar();

    return (
      <IconButton
        variant="function"
        className={spacing({ ml: 'auto' })}
        tabIndex={open ? 0 : -1}
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
          <App ThemeToggle={<ThemeToggle />} />
        </EventBusProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

const rootElement = document.getElementById('root');
const root = rootElement && createRoot(rootElement);

root?.render(<Root />);
