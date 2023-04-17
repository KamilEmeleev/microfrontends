import React from 'react';
import type { FC } from 'react';

import { Typography, TypographyProps } from '@ornament-ui/kit/Typography';

export type AppBarHeaderTitleProps = TypographyProps;

export const AppBarHeaderTitle: FC<AppBarHeaderTitleProps> = ({
  children,
  ...other
}) => {
  return (
    <Typography variant="text-m_1" className="AppBarHeaderTitle" {...other}>
      {children}
    </Typography>
  );
};
