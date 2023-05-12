import React from 'react';
import type { FC } from 'react';

import { Stack, StackProps } from '@ornament-ui/kit/Stack';
import { useBoolean } from '@ornament-ui/kit/useBoolean';

import './AppBar.css';
import { AppBarSwitcher } from './components/AppBarSwitcher';
import { AppBarContext } from './AppBarContext';

type AppBarProps = StackProps;

export const AppBar: FC<AppBarProps> = ({ children }) => {
  const [open, { on, off }] = useBoolean(false);

  return (
    <AppBarContext.Provider value={{ open }}>
      <div className="AppBar">
        <Stack
          className="AppBarPanel"
          data-open={open}
          direction="column"
          gap="m"
        >
          {children}
        </Stack>
        <AppBarSwitcher onOpen={on} onClose={off} open={open} />
      </div>
    </AppBarContext.Provider>
  );
};
