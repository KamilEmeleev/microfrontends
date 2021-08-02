import * as React from 'react';
import { Grid, Container, Typography, Box } from '@abdt/ornament';

import { Button as LocalButton } from './Button';
import { Copyright } from './Copyright';

try {
    customElements.define('wc-copyright', Copyright);
} catch (err) {
    console.warn(err);
}

const App = () => {
    const handleClick = () => {
        document.dispatchEvent(
            new CustomEvent('host:root-generate-message-event', {
                detail: {
                    variant: 'info',
                    title: 'Сообщение',
                    subtitle: '👋 Привет от Application 1!',
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
                        Application 1
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        <strong>Ак Барс Цифровые Технологии</strong> - центр
                        развития Ак Барс Банка. В нем проектируются и внедряются
                        цифровые экосистемы для решения финансовых и
                        повседневных (lifestyle) задач клиентов нашего банка.
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        В компании выстроен полный цикл разработки продуктов,
                        включая этапы исследования прототипирования
                        пользовательских интерфейсов, разработки программного
                        обеспечения, продвижения готовых продуктов. Для этого
                        сформировано порядка 20 продуктовых команд, работающих
                        на базе гибких подходов управления, построенных на
                        Agile-принципах. Есть свой IT-инкубатор, куда регулярно
                        набираются новые ФинТех стартапы.
                    </Typography>
                    <LocalButton onClick={handleClick} />
                    <wc-copyright />
                </Grid>
            </Grid>
        </Container>
    );
};

export default App;
