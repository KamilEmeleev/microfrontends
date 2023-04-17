import React from 'react';
import type { FC } from 'react';

import { Stack, StackProps } from '@ornament-ui/kit/Stack';
import { useBoolean } from '@ornament-ui/kit/useBoolean';

import './AppBar.css';

type AppBarProps = StackProps;

// TODO: [@ornament-ui/kit] List: add --list-item-border-radius
export const AppBar: FC<AppBarProps> = ({ children }) => {
  const [open, { on, off }] = useBoolean(true);

  return (
    <Stack
      className="AppBar"
      data-open={open}
      direction="column"
      gap="m"
      onMouseEnter={on}
      onMouseLeave={off}
    >
      {children}
    </Stack>
  );
};
