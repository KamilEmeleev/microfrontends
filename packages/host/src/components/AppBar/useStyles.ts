import { colors } from '@abdt/design-tokens';
import { createStyles, makeStyles } from '@abdt/ornament';

const useStyles = makeStyles((theme) =>
  createStyles({
    panel: {
      top: 0,
      left: 0,
      height: '100vh',
      width: 64,
      backgroundColor: theme.palette.secondary.main,
      boxShadow: 'none',
    },
    toolbar: {
      flexDirection: 'column',
      padding: '16px 0',
      height: '100vh',
    },
    logo: {
      padding: 0,
    },
    icon: {
      borderRadius: 8,
      color: colors.nightSky300,
      '&:hover': {
        borderRadius: 8,
        backgroundColor: '#221739',
        color: '#fff',
      },
      '& [class*="MuiTouchRipple-root"]': {
        '& *': {
          borderRadius: 8,
          backgroundColor: '#221739',
          color: '#fff',
        },
      },
    },
    iconIsActive: {
      backgroundColor: '#221739',
      color: '#fff',
    },
    indicator: {
      border: `2px solid ${theme.palette.secondary.main}`,
      transform: 'scale(1) translate(-3px, 2px)',
      backgroundColor: '#FF4733',
      width: 10,
      height: 10,
      borderRadius: '50%',
    },
  })
);

export default useStyles;
