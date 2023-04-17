import React from 'react';
import type { ComponentPropsWithRef, ReactNode, FC } from 'react';

import './AppBarBody.css';

export type AppBarBodyProps = {
  children?: ReactNode;
} & ComponentPropsWithRef<'div'>;

export const AppBarBody: FC<AppBarBodyProps> = ({ children, ...other }) => {
  return (
    <div className="AppBarBody" {...other}>
      {children}
    </div>
  );
};
