import React from 'react';
import type { ComponentPropsWithRef, ReactNode, FC } from 'react';

import './AppBarFooter.css';

export type AppBarFooterProps = {
  children?: ReactNode;
} & ComponentPropsWithRef<'div'>;

export const AppBarFooter: FC<AppBarFooterProps> = ({ children, ...other }) => {
  return (
    <div className="AppBarFooter" {...other}>
      {children}
    </div>
  );
};
