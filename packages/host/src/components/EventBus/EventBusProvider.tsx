import React, { type FC, type ReactNode, useState } from 'react';

import { useEventListener } from '@ornament-ui/kit/useEventListener';
import {
  type SnackbarCommonProps,
  useSnackbar,
} from '@ornament-ui/kit/Snackbar';

import { EventBusContext } from './EventBusContext';

export type MessageType = {
  variant: SnackbarCommonProps['status'];
  title: string;
  subtitle: string;
};

export const EventBusProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [frame, setFrame] = useState<HTMLIFrameElement | null>(null);

  const { pushMessage } = useSnackbar();

  // this receives messages from iframe
  useEventListener({
    eventName: 'message',
    handler: (e) => {
      const event = e as MessageEvent;

      if (frame?.src.indexOf(event.origin) !== -1) {
        const { data } = event;
        const { type, payload } = data;

        if (type === 'host:root-generate-message-event') {
          document.dispatchEvent(
            new CustomEvent('host:root-generate-message-event', {
              detail: payload,
            })
          );
        }
      }
    },
  });

  // this listens for custom events
  useEventListener({
    element: document,
    eventName: 'host:root-generate-message-event' as never,
    handler: (e) => {
      const event = e as CustomEvent<MessageType>;
      const { title, subtitle: description, variant: status } = event.detail;
      pushMessage({ title, description, status });
    },
  });

  return (
    <EventBusContext.Provider value={{ frame, setFrame }}>
      {children}
    </EventBusContext.Provider>
  );
};
