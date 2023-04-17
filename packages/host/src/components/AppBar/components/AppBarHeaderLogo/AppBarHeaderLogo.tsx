import React from 'react';
import type { ComponentPropsWithRef, ReactNode, FC } from 'react';

import './AppBarHeaderLogo.css';

export type AppBarHeaderLogoProps = {
  children?: ReactNode;
} & ComponentPropsWithRef<'div'>;

export const AppBarHeaderLogo: FC<AppBarHeaderLogoProps> = ({
  children,
  ...other
}) => {
  return (
    <div className="AppBarHeaderLogo" {...other}>
      {children}
    </div>
  );
};
