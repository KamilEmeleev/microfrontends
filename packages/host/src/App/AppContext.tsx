import { createContext } from 'react';

export interface IAppContext {
  frame?: HTMLIFrameElement | null;
  setFrame?: (frame: HTMLIFrameElement | null) => void;
}

export const AppContext = createContext<IAppContext>({});
