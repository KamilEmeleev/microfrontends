import * as React from 'react';
import { Grid, Container, Typography, Box } from '@abdt/ornament';

import { Button, ButtonProps } from 'app1/Button';

const App = () => {
    const handleClick = () => {
        document.dispatchEvent(
            new CustomEvent('host:root-generate-message-event', {
                detail: {
                    variant: 'info',
                    title: 'Сообщение',
                    subtitle: `👋 Привет от Application 2!`,
                },
            })
        );
    };

    // Для примера декларации типов
    const buttonProps: ButtonProps = {
        onClick: handleClick,
    };

    return (
        <Container>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={12}>
                    <Box mt={5} />
                    <Typography variant="h2" component="h1" gutterBottom>
                        Application 2
                    </Typography>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Что такое Lorem Ipsum?
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        Lorem Ipsum - это текст-"рыба", часто используемый в
                        печати и вэб-дизайне. Lorem Ipsum является стандартной
                        "рыбой" для текстов на латинице с начала XVI века. В то
                        время некий безымянный печатник создал большую коллекцию
                        размеров и форм шрифтов, используя Lorem Ipsum для
                        распечатки образцов. Lorem Ipsum не только успешно
                        пережил без заметных изменений пять веков, но и
                        перешагнул в электронный дизайн. Его популяризации в
                        новое время послужили публикация листов Letraset с
                        образцами Lorem Ipsum в 60-х годах и, в более недавнее
                        время, программы электронной вёрстки типа Aldus
                        PageMaker, в шаблонах которых используется Lorem Ipsum.
                    </Typography>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Почему он используется?
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        Давно выяснено, что при оценке дизайна и композиции
                        читаемый текст мешает сосредоточиться. Lorem Ipsum
                        используют потому, что тот обеспечивает более или менее
                        стандартное заполнение шаблона, а также реальное
                        распределение букв и пробелов в абзацах, которое не
                        получается при простой дубликации "Здесь ваш текст..
                        Здесь ваш текст.. Здесь ваш текст.." Многие программы
                        электронной вёрстки и редакторы HTML используют Lorem
                        Ipsum в качестве текста по умолчанию, так что поиск по
                        ключевым словам "lorem ipsum" сразу показывает, как
                        много веб-страниц всё ещё дожидаются своего настоящего
                        рождения. За прошедшие годы текст Lorem Ipsum получил
                        много версий. Некоторые версии появились по ошибке,
                        некоторые - намеренно (например, юмористические
                        варианты).
                    </Typography>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Где его взять?
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        Есть много вариантов Lorem Ipsum, но большинство из них
                        имеет не всегда приемлемые модификации, например,
                        юмористические вставки или слова, которые даже отдалённо
                        не напоминают латынь. Если вам нужен Lorem Ipsum для
                        серьёзного проекта, вы наверняка не хотите какой-нибудь
                        шутки, скрытой в середине абзаца. Также все другие
                        известные генераторы Lorem Ipsum используют один и тот
                        же текст, который они просто повторяют, пока не
                        достигнут нужный объём. Это делает предлагаемый здесь
                        генератор единственным настоящим Lorem Ipsum
                        генератором. Он использует словарь из более чем 200
                        латинских слов, а также набор моделей предложений. В
                        результате сгенерированный Lorem Ipsum выглядит
                        правдоподобно, не имеет повторяющихся абзацей или
                        "невозможных" слов.
                    </Typography>
                    <Button {...buttonProps} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default App;
