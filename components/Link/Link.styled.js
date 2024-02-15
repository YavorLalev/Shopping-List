import styled, { css } from "styled-components";
import Link from "next/link";
export const StyledLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  color: inherit;
  border: none;
  background: var(--color-water-10);
  font-size: larger;
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);

  ${({ $green }) =>
    $green === "green" &&
    css`
      background-color: green;
    `}

  ${({ $blue }) =>
    $blue === "blue" &&
    css`
      background-color: blue;
    `}

  &:hover {
    cursor: pointer;
  }

  &:visited {
    color: inherit;
  }
`;
