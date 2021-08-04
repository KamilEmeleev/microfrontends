import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeLayout } from '@abdt/ornament';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter as Router } from 'react-router-dom';

import { SnackbarMessage } from '@components';
import { App, AppContext } from './App';

const AppWrapper = () => {
    const [frame, setFrame] = React.useState();

    return (
        <AppContext.Provider value={{ frame, setFrame }}>
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
        </AppContext.Provider>
    );
};

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
