import { createContext, useContext } from 'react';

export type AppBarContext = {
  open?: boolean;
};

export const AppBarContext = createContext<AppBarContext>({});

export const useAppBar = () => {
  return useContext(AppBarContext);
};
