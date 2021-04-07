import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  const handleSignOutClick = () => {
    console.log("Signed out!");
  };

  return (
    <StyledNav>
      <SignOut onClick={handleSignOutClick} to="/">
        <p>Sign Out</p>
      </SignOut>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

const SignOut = styled(Link)`
  p {
    font-size: 20px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default Navigation;
