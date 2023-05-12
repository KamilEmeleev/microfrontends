import React, { FC } from 'react';

import { ArrowLeftIcon, ArrowRightIcon } from '@ornament-ui/icons';
import { useBoolean } from '@ornament-ui/kit/useBoolean';
import { IconButton } from '@ornament-ui/kit/IconButton';
import { useDebounceCallback } from '@ornament-ui/kit/useDebounceCallback';

import './AppBarSwitcher.css';

type AppBarSwitcherProps = {
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
};

export const AppBarSwitcher: FC<AppBarSwitcherProps> = ({
  open = false,
  onOpen,
  onClose,
}) => {
  const [toggleIsVisible, { on, off }] = useBoolean(false);

  const handleHover = (open: boolean) => {
    if (open) {
      on();
    } else {
      off();
    }
  };

  const [debounceHover] = useDebounceCallback(
    handleHover,
    toggleIsVisible ? 1000 : 50
  );

  const handleMouseEnter = () => {
    debounceHover(true);
  };

  const handleMouseLeave = () => {
    debounceHover(false);
  };

  return (
    <div
      className="AppBarSwitcher"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <IconButton
        variant="floating"
        size="2xs"
        onClick={open ? onClose : onOpen}
        icon={open ? ArrowLeftIcon : ArrowRightIcon}
        style={{
          visibility: toggleIsVisible ? 'visible' : 'hidden',
          borderRadius: 'var(--border-radius-s)',
        }}
        compressed
      />
    </div>
  );
};
