import * as React from 'react';

import {
  ThemeProvider,
  themeOrnamentDefault,
} from '@ornament-ui/kit/ThemeProvider';

import LocalApp from '../shared/App';

const App = () => (
  <ThemeProvider theme={themeOrnamentDefault}>
    <LocalApp />
  </ThemeProvider>
);

export default App;
