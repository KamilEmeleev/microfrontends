import React from 'react';

import { Loader } from '@ornament-ui/kit/Loader';
import { Stack } from '@ornament-ui/kit/Stack';

export const Progress = () => {
  return (
    <Stack
      direction="column"
      align="center"
      justify="center"
      style={{ height: '100vh' }}
      fullWidth
    >
      <Loader size="l" />
    </Stack>
  );
};
