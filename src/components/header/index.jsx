import React from "react";
import {
  StyledHeaderContainer,
  StyledLeftHeader,
  StyledMiddleHeader,
  StyledNavSpan,
  StyledRightHeader,
} from "./header.styled";

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledLeftHeader>Qutrix</StyledLeftHeader>
      <StyledMiddleHeader>
        <StyledNavSpan>Pie Chart</StyledNavSpan>
        <StyledNavSpan>Line Chart</StyledNavSpan>
        <StyledNavSpan>Bar Chart</StyledNavSpan>
      </StyledMiddleHeader>
      {/* <StyledRightHeader></StyledRightHeader> */}
    </StyledHeaderContainer>
  );
};

export default Header;
