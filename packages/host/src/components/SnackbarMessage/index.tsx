import * as React from 'react';
import { SnackbarMessage as SnackbarMessageType, SnackbarKey } from 'notistack';

export type GenerateMessageType = {
    variant: 'info' | 'success' | 'danger';
    title: string;
    subtitle: string;
};

export interface SnackbarMessageProps {
    key?: SnackbarKey;
    message?: SnackbarMessageType;
    ref: React.Ref<HTMLDivElement>;
}

const SnackbarMessage = (
    props: SnackbarMessageProps,
    ref: SnackbarMessageProps['ref']
) => {
    return <div ref={ref}>{props.message}</div>;
};

export default React.forwardRef(SnackbarMessage);
