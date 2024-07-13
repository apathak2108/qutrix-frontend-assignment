import styled from "styled-components";

export const StyledHeaderContainer = styled.header`
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
//   justify-content: space-between;
  top: 0;
  position: fixed;
  background-color: darkslategrey;
  z-index: 1;
  gap: 120px;
`;

export const StyledLeftHeader = styled.div`
  height: 100%;
  font-size: 28px;
  color: #fff;
  font-weight: 500;
  display: flex;
  align-items: center;
  text-indent: 12px;
`;

export const StyledMiddleHeader = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
//   justify-content: space-between;
cursor: pointer;
gap: 24px;
`;

export const StyledRightHeader = styled.div``;

export const StyledNavSpan = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #fff;

  &:hover {
    border-bottom: 4px solid #fff;
  }
`;
