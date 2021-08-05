import { Box, Container, Grid, Typography } from '@abdt/ornament';
import * as React from 'react';

const ErrorFallback = ({ error }: { error: Error }) => {
    return (
        <Container>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={12}>
                    <Box my={4}>
                        <Typography color="error" variant="body2" gutterBottom>
                            {error.message}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ErrorFallback;
