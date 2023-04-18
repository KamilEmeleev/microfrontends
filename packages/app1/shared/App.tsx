import * as React from 'react';

import { Container } from '@ornament-ui/kit/Container';
import { Grid, GridItem } from '@ornament-ui/kit/Grid';
import { spacing } from '@ornament-ui/kit/MixSpacing';
import { Typography } from '@ornament-ui/kit/Typography';

import { Button as LocalButton } from './Button';

const App = () => {
  const handleClick = () => {
    document.dispatchEvent(
      new CustomEvent('host:root-generate-message-event', {
        detail: {
          variant: 'info',
          title: "👋 I'm Application1",
        },
      })
    );
  };

  return (
    <Container size="s" position="center" className={spacing({ my: '3xl' })}>
      <Grid>
        <GridItem col={12}>
          <Typography variant="heading-2xl" defaultMargin>
            Application1
          </Typography>
          <Typography variant="text-xl" defaultMargin>
            Module Federation (webpack)
          </Typography>
          <LocalButton onClick={handleClick}>Send message</LocalButton>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default App;
