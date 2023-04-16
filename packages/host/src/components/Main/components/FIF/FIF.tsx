import React from 'react';

import Progress from '../Progress';

interface IFIF {
  url: string;
}

/**
 * FIF - Friendly Iframe
 * https://habr.com/ru/company/yandex/blog/554568/
 * @param url
 * @constructor
 */
const FIF: React.FC<IFIF> = ({ url }) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const iframe = document.createElement('iframe');
    iframe.style.height = '100%';
    iframe.style.width = '100%';
    iframe.style.border = '0';
    iframe.style.display = 'none';
    ref.current?.appendChild(iframe);

    const globalModule = iframe.contentWindow;

    const root = document.createElement('div');
    root.id = 'root';

    globalModule?.document.body.appendChild(root);

    const script = document.createElement('script');
    script.src = url;
    script.dataset.el = 'root';
    script.dataset.title = 'Inject the bundle into a friendly iframe';

    script.onload = () => {
      setLoading(false);
      iframe.style.display = 'block';
    };

    globalModule?.document.head.appendChild(script);
  }, [url]);

  return (
    // eslint-disable-next-line no-return-assign
    <div ref={(el) => (ref.current = el)}>{loading && <Progress />}</div>
  );
};

export default FIF;
