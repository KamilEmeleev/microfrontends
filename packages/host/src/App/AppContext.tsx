import { createContext } from 'react';

export interface IAppContext {
    frame?: any;
    setFrame?: (frame: any) => void;
}

export const AppContext = createContext<IAppContext>({});
