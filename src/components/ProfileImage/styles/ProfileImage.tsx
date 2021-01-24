import styled from "styled-components/macro";
import Props from "../ProfileImage.interface";

const ProfileImageWrapper = styled.img<Props>`
  /* Size */
  width: ${(props) => props.size};
  height: ${(props) => props.size};

  /* Shape */
  border-radius: 50%;

  /* Spacing */
  margin: ${(props) =>
    props.margin ? `${props.theme.spacing.margin[props.margin]}` : `sm`};
`;

export default ProfileImageWrapper;
