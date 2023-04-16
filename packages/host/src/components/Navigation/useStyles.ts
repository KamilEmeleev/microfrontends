import { colors } from '@abdt/design-tokens';
import { createStyles, makeStyles, Theme } from '@abdt/ornament';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navigation: {
      padding: theme.spacing(3, 2),
      color: colors.nightSky200,
    },
    nested: {
      paddingLeft: 32,
    },
    icon: {
      minWidth: 16,
      marginRight: 10,
    },
    link: {
      textDecoration: 'none',
    },
    text: {
      color: colors.nightSky200,
    },
    listButton: {
      borderRadius: 8,
      '&:hover': {
        backgroundColor: '#2A1C43',
      },
    },
    isActive: {
      fontWeight: 500,
      color: '#fff',
    },
    gutters: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  })
);

export default useStyles;
