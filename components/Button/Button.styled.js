import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  appearance: none;
  border: none;
  background: var(--color-water-10);
  font-size: larger;
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
  border-radius: 8px;

  ${({ $variant }) =>
    $variant === "add" &&
    css`
      background-color: var(--color-nemo);
      color: var(--color-water-10);
      position: fixed;
      bottom: 40px;
      right: 40px;
    `}

  ${({ $variant }) =>
    $variant === "favorites" &&
    css`
      background-color: var(--color-nemo);
      color: var(--color-water-10);
      position: fixed;
      bottom: 100px;
      right: 40px;
    `}

    ${({ $variant }) =>
    $variant === "footer" &&
    css`
      background-color: var(--color-nemo);
      color: var(--color-water-10);
      width: 100%;
      border-radius: 0;
    `}

  &:hover {
    cursor: pointer;
  }
`;
