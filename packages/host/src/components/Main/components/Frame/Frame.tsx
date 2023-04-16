import React, { useContext, useEffect, useState } from 'react';

import { css, styled } from '@abdt/ornament';

import { AppContext } from '../../../../App';
import Progress from '../Progress';

type IFrameProps = {
  url: string;
};

const Iframe = styled('iframe')<{ isLoading: boolean }>`
  width: 100%;
  height: 100%;
  border-width: 0;
  display: block;
  ${({ isLoading }) =>
    isLoading &&
    css`
      display: none;
    `}
`;

const Frame: React.FC<IFrameProps> = ({ url }) => {
  const [loading, setLoading] = useState(true);
  const { setFrame } = useContext(AppContext);

  return (
    <>
      <Iframe
        id="frame"
        src={url}
        ref={(iframe) => setFrame && setFrame(iframe)}
        onLoad={() => setLoading(false)}
        isLoading={loading}
      />
      {loading && <Progress />}
    </>
  );
};

export default Frame;
