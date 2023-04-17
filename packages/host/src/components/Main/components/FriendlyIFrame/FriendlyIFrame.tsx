import React, { useRef, useState } from 'react';
import type { ReactNode, FC } from 'react';

import { Container } from '@ornament-ui/kit/Container';
import { Grid, GridItem } from '@ornament-ui/kit/Grid';
import { spacing } from '@ornament-ui/kit/MixSpacing';

import { Progress } from '../../../Progress';

declare global {
  interface Window {
    init: ({
      container,
      global,
    }: {
      container: HTMLDivElement | null;
      global: Document;
    }) => undefined;
    widget: {
      init: () => void;
    };
  }
}

type GlobalModule = Window | null;

/**
 * FriendlyIFrame + ShadowDom
 * https://habr.com/ru/company/yandex/blog/554568/
 */
export const FriendlyIFrame: FC<{
  url: string;
  children?: ReactNode;
}> = ({ url, children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    // Добавляет невидимый FriendlyIFrame в шапку приложения
    const iframe = document.createElement('iframe');
    document.head.appendChild(iframe);

    // Сохраняет ссылку на глобальную область FriendlyIFrame
    const globalModule: GlobalModule = iframe.contentWindow;

    // Создает скрипт
    const script = document.createElement('script');
    script.src = url;

    script.onload = () => {
      // Скрипт загружен
      setLoading(false);
      iframe.style.display = 'block';

      // Выполняем скрипт в глобальной области в FriendlyIFrame
      globalModule?.init({
        container: ref.current,
        global: document,
      });

      globalModule?.widget.init();
    };

    // Добавляет скрипт в глобальную область FriendlyIFrame
    globalModule?.document.head.appendChild(script);
  }, [url]);

  return (
    <Container size="s" position="center" className={spacing({ py: '4xl' })}>
      <Grid>
        <GridItem col={12}>
          {children}
          <div ref={ref}>{loading && <Progress />}</div>
        </GridItem>
      </Grid>
    </Container>
  );
};
