import React from 'react';

import UserAvatarPropTypes from './propTypes';

import * as styles from './UserAvatar.styled';

const UserAvatar = ({ avatar, width, height, margin, profile }) => {
  return (
    <styles.Avatar
      margin={margin}
      width={width}
      height={height}
      profile={profile}
    >
      {avatar ? (
        <styles.AvatarImage
          src={avatar}
          alt="User Avatar"
          width={width}
          height={height}
          profile={profile}
        />
      ) : (
        <styles.AvatarBg />
      )}
    </styles.Avatar>
  );
};

UserAvatar.propTypes = UserAvatarPropTypes;

export default UserAvatar;
