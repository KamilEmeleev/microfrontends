import * as React from 'react';
import { Box, Button, Container, Grid, Typography } from '@abdt/ornament';

import '@abdt/fonts';

const App: React.FC<{ global: Document }> = ({ global }) => {
    const handleClick = () => {
        global.dispatchEvent(
            new CustomEvent('host:root-generate-message-event', {
                detail: {
                    variant: 'info',
                    title: 'Сообщение',
                    subtitle: '👋 Привет от Application 4!',
                },
            })
        );
    };

    return (
        <Container>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={12}>
                    <Box mt={5} />
                    <Typography variant="h2" component="h1" gutterBottom>
                        Application 4
                    </Typography>
                    <Button onClick={handleClick}>Click</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default App;
