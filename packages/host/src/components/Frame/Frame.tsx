import React, { useContext } from 'react';
import { styled } from '@abdt/ornament';
import { AppContext } from '../../App';

type IFrameProps = {
    url: string;
};

const Iframe = styled('iframe')`
    width: 100%;
    height: 100%;
    border-width: 0;
    display: block;
`;

// https://habr.com/ru/company/yandex/blog/554568/
const Frame: React.FC<IFrameProps> = ({ url }) => {
    const { setFrame } = useContext(AppContext);

    return (
        <Iframe
            id="frame"
            src={url}
            ref={(iframe) => setFrame && setFrame(iframe)}
        />
    );
};

export default Frame;
