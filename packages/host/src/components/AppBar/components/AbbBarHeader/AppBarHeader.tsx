import React from 'react';
import type { ComponentPropsWithRef, ReactNode, FC } from 'react';

import { Stack } from '@ornament-ui/kit/Stack';

import './AppBarHeader.css';

export type AppBarHeaderProps = {
  children?: ReactNode;
} & ComponentPropsWithRef<'div'>;

export const AppBarHeader: FC<AppBarHeaderProps> = ({ children, ...other }) => {
  return (
    <Stack className="AppBarHeader" gap="m" align="center" {...other}>
      {children}
    </Stack>
  );
};
