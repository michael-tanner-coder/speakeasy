// Presentational component for displaying a given profile image

import React from "react";
import ProfileImageWrapper from "./styles/ProfileImage";
import ProfileImageProps from "./ProfileImage.interface";

const ProfileImage: React.FC<ProfileImageProps> = ({ ...restProps }) => {
  return <ProfileImageWrapper {...(restProps as any)} />;
};

export default ProfileImage;
