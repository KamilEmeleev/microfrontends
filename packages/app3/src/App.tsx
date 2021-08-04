import * as React from 'react';
import {
    Box,
    Container,
    Grid,
    ThemeLayout,
    Typography,
    Button,
} from '@abdt/ornament';
import useEventListener from 'use-typed-event-listener';

import '@abdt/fonts';

const App = () => {
    const sendMessage = (type: string, payload?: unknown) => {
        window.parent.postMessage(
            {
                type,
                payload,
            },
            'http://localhost:5000'
        );
    };

    const listener = (event: MessageEvent) => {
        if (event.origin !== 'http://localhost:5001') {
            // что-то прислали с неизвестного домена - проигнорируем..
            return;
        }

        console.log(`получено: ${event.data}`);
    };

    const handleClick = () => {
        sendMessage('host:root-generate-message-event', {
            variant: 'info',
            title: 'Сообщение',
            subtitle: `👋 Привет от Application 3!`,
        });
    };

    useEventListener(window, 'message', listener);

    return (
        <ThemeLayout>
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12}>
                        <Box mt={5} />
                        <Typography variant="h2" component="h1" gutterBottom>
                            Application 3
                        </Typography>
                        <Typography variant="h4" component="h2" gutterBottom>
                            И это iframe!
                        </Typography>
                        <Button onClick={handleClick}>App3 Button</Button>
                    </Grid>
                </Grid>
            </Container>
        </ThemeLayout>
    );
};

export default App;
