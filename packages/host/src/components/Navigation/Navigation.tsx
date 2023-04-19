import React from 'react';
import type { FC } from 'react';

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@ornament-ui/kit/List';
import { Link, useRoute } from 'wouter';

import './Navigation.css';

import { apps } from './helper';

const NavigationItem: FC<(typeof apps)[number]> = ({
  link,
  title,
  icon: Icon,
}) => {
  const [isActive] = useRoute(link);

  return (
    <ListItem disableGutters>
      <ListItemButton as={Link} to={link} className={isActive ? 'active' : ''}>
        <ListItemIcon>
          <Icon size="m" />
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
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
