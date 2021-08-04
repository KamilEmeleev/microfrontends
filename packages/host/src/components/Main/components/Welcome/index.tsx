import * as React from 'react';
import { Box, Container, Grid, Typography } from '@abdt/ornament';

const Welcome = () => {
    return (
        <Container>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={12}>
                    <Box mt={5} />
                    {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                    <Typography variant="h2" component="h1" gutterBottom>
                        Welcome to LiveSpace 2.0 🚀
                    </Typography>
                    <Typography variant="body1" component="p">
                        <strong>Live Space</strong> - экосистема, позволяющая
                        объединять различные независимые приложения с
                        Web-интерфейсом в общее автоматизированное рабочее место
                        пользователя
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Welcome;
