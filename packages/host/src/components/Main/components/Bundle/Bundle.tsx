import React from 'react';
import Progress from '../Progress';

interface IBundle {
    url: string;
}

const Bundle: React.FC<IBundle> = ({ url }) => {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const iframe = document.createElement('iframe');
        iframe.style.height = '100%';
        iframe.style.width = '100%';
        iframe.style.border = '0';
        iframe.style.display = 'none';
        document.getElementById('bundle')?.appendChild(iframe);
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

    return <div id="bundle">{loading && <Progress />}</div>;
};

export default Bundle;
