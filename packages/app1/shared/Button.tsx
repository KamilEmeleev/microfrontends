import * as React from 'react';

import { Button as Btn, ButtonProps } from '@ornament-ui/kit/Button';

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <Btn onClick={onClick}>{children}</Btn>
);
