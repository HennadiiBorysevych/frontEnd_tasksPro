import React from 'react';
import { Avatar, AvatarBg } from './UserAvatar.styled';

const UserAvatar = ({ avatar, width = '68px', height = '68px', margin }) => {
  return (
    <Avatar margin={margin} width={width} height={height}>
      {avatar ? (
        <img src={avatar} alt="User Avatar" width={width} height={height} />
      ) : (
        <AvatarBg size={width} />
      )}
    </Avatar>
  );
};

export default UserAvatar;
