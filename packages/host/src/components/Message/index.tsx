import * as React from 'react';

import { colors } from '@abdt/design-tokens';
import { CircleInfoFilled, Close } from '@abdt/icons';
import { Box, Grid, IconButton, Paper, Typography } from '@abdt/ornament';

import useStyles from './useStyles';

export interface MessageProps {
  close?: () => void;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  variant: 'info' | 'success' | 'danger';
  ref: React.Ref<HTMLDivElement>;
}

const Message = (props: MessageProps, ref: MessageProps['ref']) => {
  const { close, title, subtitle, children, variant } = props;
  const classes = useStyles({ variant });

  return (
    <Paper
      component="div"
      ref={ref}
      elevation={1}
      classes={{
        root: classes.paper,
      }}
    >
      {!children ? (
        <>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            wrap="nowrap"
          >
            <Box mr={3} display="flex">
              <CircleInfoFilled className={classes.infoIcon} />
            </Box>
            <Box>
              {title && (
                <>
                  <Typography variant="body2">{title}</Typography>
                  <Box mb={1} />
                </>
              )}
              {subtitle && (
                <Typography variant="body2" color="textSecondary">
                  {subtitle}
                </Typography>
              )}
            </Box>
          </Grid>
          <div className={classes.indicator} />
          {close && (
            <IconButton
              disableTouchRipple={false}
              disableFocusRipple={false}
              onClick={close}
              className={classes.close}
              size="small"
            >
              <Close color={colors.gray300} width={16} height={16} />
            </IconButton>
          )}
        </>
      ) : (
        children
      )}
    </Paper>
  );
};

export default React.forwardRef(Message);
