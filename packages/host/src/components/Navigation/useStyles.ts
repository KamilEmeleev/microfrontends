import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { colors } from '@abdt/design-tokens';

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
