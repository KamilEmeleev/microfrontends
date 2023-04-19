import './Main.css';

import React, { type FC } from 'react';

import { Typography } from '@ornament-ui/kit/Typography';
import { ErrorBoundary } from 'react-error-boundary';
import { Route } from 'wouter';

import {
  IFrame,
  FriendlyIFrame,
  ErrorFallback,
  Progress,
  Welcome,
} from './components';

const App1 = React.lazy(() => import('app1/App'));
const App2 = React.lazy(() => import('app2/App'));

export const Main: FC = () => {
  return (
    <main className="Main">
      <Route path="/">
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
        <IFrame src="https://www.google.ru/" />
      </Route>
      <Route path="/app4" key="4">
        <IFrame src="http://localhost:5003" />
      </Route>
      <Route path="/app5" key="5">
        <FriendlyIFrame url="http://localhost:5000/script.js">
          <Typography variant="heading-2xl" defaultMargin>
            FriendlyIFrame + ShadowDom
          </Typography>
        </FriendlyIFrame>
      </Route>
    </main>
  );
};
