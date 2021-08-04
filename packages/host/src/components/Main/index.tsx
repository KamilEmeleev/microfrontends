import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Box, Container, Grid, Typography, styled, css } from '@abdt/ornament';
import { ErrorBoundary } from 'react-error-boundary';

import { Frame, Progress, Welcome } from './components';

interface MainProps {
    open?: boolean;
}

const App1 = React.lazy(() => import('app1/App'));
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

const drawerWidth = 240;

const StyledMain = styled('main')<{ open?: boolean }>`
    flex-grow: 1;
    z-index: 11;
    transition: ${({ theme }) =>
        theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })};
    margin-left: ${-drawerWidth};
    height: 100vh;
    overflow: auto;
    border-radius: 8px 0 0 8px;
    background-color: #ffffff;
    ${({ open }) =>
        open &&
        css`
            flex-grow: 1;
            transition: ${({ theme }) =>
                theme.transitions.create('margin', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                })};
            margin-left: 0;
        `}
`;

const Main: React.FC<MainProps> = ({ open }) => {
    return (
        <StyledMain open={open}>
            <Switch>
                <Route path="/" exact>
                    <Welcome />
                </Route>
                <Route path="/app1">
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <React.Suspense fallback={<Progress />}>
                            <App1 />
                        </React.Suspense>
                    </ErrorBoundary>
                </Route>
                <Route path="/app2">
                    <React.Suspense fallback={<Progress />}>
                        <ErrorBoundary FallbackComponent={ErrorFallback}>
                            <App2 />
                        </ErrorBoundary>
                    </React.Suspense>
                </Route>
                <Route path="/app3" key="3">
                    <Frame url="http://localhost:5003" />
                </Route>
                <Route path="/app4" key="4">
                    <Frame url="https://social-card.ru" />
                </Route>
            </Switch>
        </StyledMain>
    );
};

export default Main;
