import * as React from 'react';

import { Container } from '@ornament-ui/kit/Container';
import { Grid, GridItem } from '@ornament-ui/kit/Grid';
import { spacing } from '@ornament-ui/kit/MixSpacing';
import { Typography } from '@ornament-ui/kit/Typography';
import { Button, ButtonProps } from 'app1/Button';

const App = () => {
  const handleClick = () => {
    document.dispatchEvent(
      new CustomEvent('host:root-generate-message-event', {
        detail: {
          variant: 'info',
          title: "👋 I'm Application2",
        },
      })
    );
  };

  // Для примера декларации типов
  const buttonProps: ButtonProps = {
    onClick: handleClick,
    children: 'ButtonApp1',
  };

  return (
    <Container size="s" position="center" className={spacing({ py: '4xl' })}>
      <Grid>
        <GridItem col={12}>
          <Typography variant="heading-2xl" defaultMargin>
            Application2
          </Typography>
          <Typography variant="text-xl" defaultMargin>
            Module Federation (webpack)
          </Typography>
          <Button {...buttonProps} />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default App;
