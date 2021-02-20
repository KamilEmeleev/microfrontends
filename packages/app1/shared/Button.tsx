import * as React from 'react';
import { Button as Btn } from '@abdt/ornament';

export interface ButtonProps {
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick }) => (
    <Btn onClick={onClick}>App1 Button</Btn>
);
