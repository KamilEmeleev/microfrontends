import React from 'react';
import Progress from '../Progress';

interface IFIF_SR {
    url: string;
}

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
 * FIF - Friendly Iframe, SR - Shadow Root
 * https://habr.com/ru/company/yandex/blog/554568/
 */
const FIF_SR: React.FC<IFIF_SR> = ({ url, children }) => {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        // Добавляет невидимый FIF в шапку приложения
        const iframe = document.createElement('iframe');
        document.head.appendChild(iframe);

        // Сохраняет ссылку на глобальную область FIF
        const globalModule: GlobalModule = iframe.contentWindow;

        // Создает скрипт
        const script = document.createElement('script');
        script.src = url;
        script.onload = () => {
            // Скрипт загружен
            setLoading(false);
            iframe.style.display = 'block';
            // Выполняем скрипт в глобальной области в FIF
            globalModule?.init({
                container: ref.current,
                global: document,
            });
            globalModule?.widget.init();
        };

        // Добавляет скрипт в глобальную область FIF
        globalModule?.document.head.appendChild(script);
    }, [url]);

    return (
        <>
            {children && children}
            {/* eslint-disable-next-line no-return-assign */}
            <div ref={(el) => (ref.current = el)}>
                {loading && <Progress />}
            </div>
        </>
    );
};

export default FIF_SR;
