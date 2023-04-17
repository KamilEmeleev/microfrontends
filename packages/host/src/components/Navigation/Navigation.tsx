import React from 'react';
import type { FC } from 'react';

import { DocumentIcon } from '@ornament-ui/icons';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@ornament-ui/kit/List';
import { useLocation, Link } from 'react-router-dom';

import './Navigation.css';

import { apps } from './helper';

// TODO: [ornament-ui] something has gone wrong with polymorphic type in typescript 5
export const Navigation: FC = () => {
  const location = useLocation();

  return (
    <List as="nav" className="Navigation">
      {apps.map(({ title, link, icon: Icon }, index) => {
        return (
          <ListItem key={index} disableGutters>
            <ListItemButton
              as={Link}
              to={link}
              className={location.pathname === link ? 'active' : ''}
            >
              <ListItemIcon>
                {Icon ? <Icon size="m" /> : <DocumentIcon size="m" />}
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
