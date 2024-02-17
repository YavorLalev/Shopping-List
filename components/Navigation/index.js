import styled from "styled-components";
import { StyledButton } from "../Button/Button.styled";
import { useState } from "react";

const StyledFooter = styled.footer`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 0;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  margin: 0;
  padding: 0;
`;

export default function NavBar({ isChecked, onClick }) {
  return (
    <StyledFooter>
      {" "}
      <StyledButton type="button" onClick={onClick} $variant="footer">
        {" "}
        {!isChecked ? "Add" : "Back"}
      </StyledButton>{" "}
      <StyledButton type="button" $variant="footer">
        {" "}
        Favorites
      </StyledButton>
    </StyledFooter>
  );
}
