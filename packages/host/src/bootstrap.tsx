import * as React from 'react';

import { ThemeLayout } from '@abdt/ornament';
import { SnackbarMessage } from '@components';
import {
  ThemeProvider,
  themeOrnamentDefault,
} from '@ornament-ui/kit/ThemeProvider';
import { SnackbarProvider } from 'notistack';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { App, AppContext } from './App';

const AppWrapper = () => {
  const [frame, setFrame] = React.useState();

  return (
    <AppContext.Provider value={{ frame, setFrame }}>
      <ThemeProvider theme={themeOrnamentDefault}>
        <ThemeLayout>
          <SnackbarProvider
            autoHideDuration={10000}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            content={(key, message) => (
              <SnackbarMessage key={key} message={message} />
            )}
          >
            <Router>
              <App />
            </Router>
          </SnackbarProvider>
        </ThemeLayout>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
