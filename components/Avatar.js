import React from 'react';
import { Image } from 'react-native';

export const Avatar = ({ avatarUrl }) => {
  // if (!avatarUrl) {
  //   avatarUrl =
  //     'https://s3.amazonaws.com/exp-brand-assets/ExponentEmptyManifest_192.png';
  // }

  return (
    <Image
      source={avatarUrl ? { uri: avatarUrl } : require('../assets/images/icon.png')}
      style={{ width: 200, height: 200, borderRadius: 200 / 2 }}
      resizeMode="cover"
    />
  );
};