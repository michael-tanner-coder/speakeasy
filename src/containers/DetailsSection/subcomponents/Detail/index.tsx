import React from "react";
import DetailProps from "./Detail.interface";
import { DetailWrapper } from "./Detail.styles";

const Detail: React.FC<DetailProps> = ({
  heading,
  paragraph,
  image,
  imageMarginLeft,
}) => {
  return (
    <DetailWrapper>
      <div className="background">
        <img
          style={{ marginLeft: imageMarginLeft }}
          width="213px"
          height="115px"
          src={image}
          alt=""
        />
      </div>
      <h3>{heading}</h3>
      <p>{paragraph}</p>
    </DetailWrapper>
  );
};

export default Detail;
