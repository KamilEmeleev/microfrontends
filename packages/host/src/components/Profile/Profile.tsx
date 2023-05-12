import React from 'react';

import owl from '@ornament-ui/avatars/owl_indigo.svg';
import { Avatar } from '@ornament-ui/kit/Avatar';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@ornament-ui/kit/List';

import './Profile.css';

type ProfileProps = {
  fullName?: string;
};

// TODO: [@ornament-ui/avatars] remove dist
// TODO: [@ornament-ui/avatars] svgo optimize
export const Profile: React.FC<ProfileProps> = ({
  fullName = 'Kamil Emeleev',
}) => {
  return (
    <List className="Profile">
      <ListItem disableGutters>
        <ListItemIcon>
          <Avatar size="xs" name={fullName} src={owl} online />
        </ListItemIcon>
        <ListItemText
          primary={fullName}
          secondary="Online"
          primaryTypographyProps={{
            noWrap: true,
          }}
          secondaryTypographyProps={{
            color: 'success',
          }}
        />
      </ListItem>
    </List>
  );
};
