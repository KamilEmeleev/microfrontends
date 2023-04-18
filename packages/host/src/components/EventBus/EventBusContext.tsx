import { createContext } from 'react';

export type EventBusContext = {
  frame?: HTMLIFrameElement | null;
  setFrame?: (frame: HTMLIFrameElement | null) => void;
};

export const EventBusContext = createContext<EventBusContext>({});
