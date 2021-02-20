import * as React from 'react';
import { Button as Btn } from '@abdt/ornament';

interface ButtonProps {
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => (
    <Btn onClick={onClick}>App1 Button</Btn>
);

export default Button;
