import * as React from 'react';
import cn from 'classnames';
import { Switch, Route } from 'react-router-dom';

import { Box, Container, Grid, Typography } from '@abdt/ornament';
import { ErrorBoundary } from 'react-error-boundary';
import useStyles from './useStyles';

import Welcome from '../Welcome';

interface MainProps {
    open?: boolean;
}

// @ts-ignore
const App1 = React.lazy(() => import('app1/App'));
// @ts-ignore
const App2 = React.lazy(() => import('app2/App'));

function ErrorFallback({ error }: { error: Error }) {
    return (
        <Container>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={12}>
                    <Box my={4}>
                        <Typography color="error" variant="body2" gutterBottom>
                            {error.message}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

const Main: React.FC<MainProps> = ({ open }) => {
    const classes = useStyles();
    return (
        <main
            className={cn(classes.content, {
                [classes.contentShift]: open,
            })}
        >
            <Switch>
                <Route path="/" exact>
                    <Welcome />
                </Route>
                <Route path="/app1">
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <React.Suspense fallback="Загрузка...">
                            <App1 />
                        </React.Suspense>
                    </ErrorBoundary>
                </Route>
                <Route path="/app2">
                    <React.Suspense fallback="Загрузка...">
                        <ErrorBoundary FallbackComponent={ErrorFallback}>
                            <App2 />
                        </ErrorBoundary>
                    </React.Suspense>
                </Route>
            </Switch>
        </main>
    );
};

export default Main;
