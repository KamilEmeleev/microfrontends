import React, { type ComponentPropsWithRef, useContext } from 'react';

import { useBoolean } from '@ornament-ui/kit/useBoolean';

import { AppContext } from '../../../../App';
import { Progress } from '../../../Progress';

type IFrameProps = ComponentPropsWithRef<'iframe'>;

export const IFrame: React.FC<IFrameProps> = ({ src }) => {
  const [loading, { off }] = useBoolean(true);
  const { setFrame } = useContext(AppContext);

  return (
    <>
      <iframe
        title="iframe"
        src={src}
        ref={(iframe) => setFrame && setFrame(iframe)}
        onLoad={off}
        style={{
          border: 'none',
          width: '100%',
          height: '100%',
        }}
      />
      {loading && <Progress />}
    </>
  );
};
