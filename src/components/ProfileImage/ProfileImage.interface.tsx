import React from "react";

export default interface ProfileImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  margin?: string | number; // Margin spacing around the entire image
  size?: string | number; //Sets an equal height and width for the image
}
