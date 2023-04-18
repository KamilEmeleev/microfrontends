import * as React from 'react';

import { Container } from '@ornament-ui/kit/Container';
import { Grid, GridItem } from '@ornament-ui/kit/Grid';
import { Typography } from '@ornament-ui/kit/Typography';
import { spacing } from '@ornament-ui/kit/MixSpacing';

export const Welcome = () => {
  return (
    <Container size="s" position="center" className={spacing({ my: '3xl' })}>
      <Grid>
        <GridItem col={12}>
          <Typography variant="heading-2xl" defaultMargin>
            Making Microfrontends
          </Typography>
          <Typography variant="text-l_1" defaultMargin>
            What techniques are used here:
          </Typography>
          <ul className={spacing({ pl: 'l' })}>
            <Typography variant="text-l" as="li" defaultMargin>
              Webpack + Module Federation
            </Typography>
            <Typography variant="text-l" as="li" defaultMargin>
              Iframe with postMessage
            </Typography>
            <Typography variant="text-l" as="li" defaultMargin>
              FriendlyIframe + ShadowDOM
            </Typography>
          </ul>
        </GridItem>
      </Grid>
    </Container>
  );
};
