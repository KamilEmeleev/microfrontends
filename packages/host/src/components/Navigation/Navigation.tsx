import React from 'react';
import type { FC } from 'react';

import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@ornament-ui/kit/List';
import { Link, useRoute } from 'wouter';
import { Tooltip } from '@ornament-ui/kit/Tooltip';

import './Navigation.css';

import { useAppBar } from '../AppBar/AppBarContext';

import { apps } from './helper';

const NavigationItem: FC<(typeof apps)[number]> = ({
  link,
  title,
  icon: Icon,
}) => {
  const [isActive] = useRoute(link);
  const { open } = useAppBar();

  return (
    <Tooltip label={title} offset={[0, 20]} placement="right" disabled={open}>
      <ListItemButton as={Link} to={link} className={isActive ? 'active' : ''}>
        <ListItemIcon>
          <Icon size="m" />
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </Tooltip>
  );
};

// TODO: [ornament-ui] something has gone wrong with polymorphic type in typescript 5
export const Navigation = () => {
  return (
    <List as="nav" className="Navigation">
      {apps.map((app, index) => {
        return <NavigationItem {...app} key={index} />;
      })}
    </List>
  );
};
