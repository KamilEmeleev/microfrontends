import * as React from 'react';

import { Button } from '@ornament-ui/kit/Button';
import { Container } from '@ornament-ui/kit/Container';
import { Grid, GridItem } from '@ornament-ui/kit/Grid';
import { spacing } from '@ornament-ui/kit/MixSpacing';
import {
  ThemeProvider,
  themeOrnamentDefault,
} from '@ornament-ui/kit/ThemeProvider';
import { Typography } from '@ornament-ui/kit/Typography';
import { useEventListener } from '@ornament-ui/kit/useEventListener';

import './App.css';

const App = () => {
  const sendMessage = (type: string, payload?: unknown) => {
    window.parent.postMessage(
      {
        type,
        payload,
      },
      'http://localhost:5000'
    );
  };

  const handleClick = () => {
    sendMessage('host:root-generate-message-event', {
      variant: 'info',
      title: "👋 I'm Application3",
    });
  };

  useEventListener({
    eventName: 'message',
    handler: (event) => {
      // TODO: fix problem with type of event (example use-typed-event-listener)
      // TODO: export UseEventListener type
      const e = event as MessageEvent;

      if (e.origin !== 'http://localhost:5001') {
        // что-то прислали с неизвестного домена - проигнорируем..
        return;
      }

      console.log(`получено: ${e.data}`);
    },
  });

  return (
    <ThemeProvider theme={themeOrnamentDefault}>
      <Container size="s" position="center" className={spacing({ py: '4xl' })}>
        <Grid>
          <GridItem col={12}>
            <Typography variant="heading-2xl" defaultMargin>
              Application3
            </Typography>
            <Typography variant="text-xl" defaultMargin>
              Iframe + Window.postMessage()
            </Typography>
            <Button onClick={handleClick}>Send PostMessage</Button>
          </GridItem>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
