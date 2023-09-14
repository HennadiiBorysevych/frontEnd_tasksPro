import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, AvatarBg, AvatarImage } from './UserAvatar.styled';

const UserAvatar = ({ avatar, width, height, margin, profile }) => {
  return (
    <Avatar margin={margin} width={width} height={height} profile={profile}>
      {avatar ? (
        <AvatarImage
          src={avatar}
          alt="User Avatar"
          width={width}
          height={height}
          profile={profile}
        />
      ) : (
        <AvatarBg />
      )}
    </Avatar>
  );
};

UserAvatar.propTypes = {
  avatar: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
};

export default UserAvatar;
