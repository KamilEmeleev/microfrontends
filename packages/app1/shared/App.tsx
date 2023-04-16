import * as React from 'react';

import { Container } from '@ornament-ui/kit/Container';
import { Grid, GridItem } from '@ornament-ui/kit/Grid';
import { Typography } from '@ornament-ui/kit/Typography';

import { Button as LocalButton } from './Button';

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
    <Container size="s" position="center">
      <Grid>
        <GridItem col={12}>
          <Typography variant="heading-2xl" defaultMargin>
            Application 1
          </Typography>
          <Typography defaultMargin>
            <Typography variant="text-m_1" display="inline">
              Ак Барс Цифровые Технологии
            </Typography>{' '}
            - центр развития Ак Барс Банка. В нем проектируются и внедряются
            цифровые экосистемы для решения финансовых и повседневных
            (lifestyle) задач клиентов нашего банка.
          </Typography>
          <Typography defaultMargin>
            В компании выстроен полный цикл разработки продуктов, включая этапы
            исследования прототипирования пользовательских интерфейсов,
            разработки программного обеспечения, продвижения готовых продуктов.
            Для этого сформировано порядка 20 продуктовых команд, работающих на
            базе гибких подходов управления, построенных на Agile-принципах.
            Есть свой IT-инкубатор, куда регулярно набираются новые ФинТех
            стартапы.
          </Typography>
          <LocalButton onClick={handleClick} />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default App;
