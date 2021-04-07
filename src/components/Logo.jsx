import React from "react";
import styled from "styled-components";
import Tilt from "react-tilt";
import Face from "../images/face-detection.svg";

const Logo = () => {
  return (
    <LogoDiv>
      <StyledTilt
        className="Tilt"
        options={{ max: 55 }}
        style={{ height: 250, width: 250 }}
      >
        <div className="Tilt-inner">
          <img src={Face} alt="face-icon" />
        </div>
      </StyledTilt>
    </LogoDiv>
  );
};

const LogoDiv = styled.div`
  margin: 4rem;
`;

const StyledTilt = styled(Tilt)`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
    overflow: hidden;
  }
`;

export default Logo;
