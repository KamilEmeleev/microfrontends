import * as React from 'react';

import { Button } from '@ornament-ui/kit/Button';
import { Container } from '@ornament-ui/kit/Container';
import { Grid, GridItem } from '@ornament-ui/kit/Grid';
import {
  ThemeProvider,
  themeOrnamentDefault,
} from '@ornament-ui/kit/ThemeProvider';
import { Typography } from '@ornament-ui/kit/Typography';
import { useEventListener } from '@ornament-ui/kit/useEventListener';

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
      title: 'Сообщение',
      subtitle: `👋 Привет от Application 3!`,
    });
  };

  useEventListener({
    eventName: 'message',
    handler: (event) => {
      // TODO: problem with type of event
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
      <Container size="s" position="center">
        <Grid>
          <GridItem col={12}>
            <Typography variant="heading-2xl" defaultMargin>
              Application 3
            </Typography>
            <Typography variant="heading-xl" defaultMargin>
              И это iframe!
            </Typography>
            <Button onClick={handleClick}>App3 Button</Button>
          </GridItem>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
