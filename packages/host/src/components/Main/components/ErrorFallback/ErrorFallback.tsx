import * as React from 'react';

import { Container } from '@ornament-ui/kit/Container';
import { Grid, GridItem } from '@ornament-ui/kit/Grid';
import { spacing } from '@ornament-ui/kit/MixSpacing';
import { Typography } from '@ornament-ui/kit/Typography';

export const ErrorFallback = ({ error }: { error: Error }) => {
  return (
    <Container size="s" position="center" className={spacing({ my: '3xl' })}>
      <Grid>
        <GridItem col={12}>
          <Typography color="error" variant="text-m_1" defaultMargin>
            {error.message}
          </Typography>
        </GridItem>
      </Grid>
    </Container>
  );
};
