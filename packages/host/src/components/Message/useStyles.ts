import { makeStyles, Theme } from '@abdt/ornament';

type Props = {
  variant: 'info' | 'success' | 'danger';
};

const colors = {
  info: '#5780EA',
  success: '#22BE54',
  danger: '#FF4733',
};

export default makeStyles<Theme, Props>({
  paper: {
    filter: 'drop-shadow(0px 8px 32px rgba(0, 0, 0, 0.08))',
    maxWidth: 376,
    padding: '16px 40px 16px 20px',
  },
  close: {
    position: 'absolute',
    right: 8,
    top: 8,
  },
  infoIcon: ({ variant }) => ({
    color: colors[variant],
    marginTop: 4,
  }),
  indicator: ({ variant }) => ({
    width: 4,
    height: '100%',
    left: 0,
    top: 0,
    backgroundColor: colors[variant],
    position: 'absolute',
    borderRadius: '8px 0 0 8px',
  }),
});
