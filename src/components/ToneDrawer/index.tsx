// Functional component for holding all selectable tones in the chatbar

import React from "react";
import ToneDrawerWrapper from "./styles/ToneDrawer";
import ToneDrawerProps from "./ToneDrawer.interface";

// as?: React.ElementType | keyof JSX.IntrinsicElements;
const ToneDrawer: React.FC<ToneDrawerProps> = ({
  children,
  open,
  ...restProps
}) => {
  return (
    <ToneDrawerWrapper open={open} {...(restProps as any)}>
      {children}
    </ToneDrawerWrapper>
  );
};

export default ToneDrawer;
