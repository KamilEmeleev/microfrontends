import React, { type ComponentPropsWithRef, useContext } from 'react';

import { useBoolean } from '@ornament-ui/kit/useBoolean';
import { EventBusContext } from '@components';

import { Progress } from '../../../Progress';

type IFrameProps = ComponentPropsWithRef<'iframe'>;

export const IFrame: React.FC<IFrameProps> = ({ src }) => {
  const [loading, { off }] = useBoolean(true);
  const { setFrame } = useContext(EventBusContext);

  return (
    <>
      <iframe
        title="iframe"
        src={src}
        ref={(iframe) => setFrame?.(iframe)}
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
