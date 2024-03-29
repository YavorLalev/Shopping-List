import useSWR from "swr";
import { StyledHeading, StyledList } from "./ProductList.styled";
import { StyledLink } from "../Link/Link.styled";
import React, { useState } from "react";

export default function ProductList() {
  const { data, isLoading } = useSWR("/api/products");
  const [isChecked, setIsChecked] = useState(false);

  function handleToggle() {
    setIsChecked(!isChecked);
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <StyledHeading>Products</StyledHeading>
      <StyledList>
        {data &&
          data
            .filter(({ category }) => category === "Food")
            .map(({ _id, name, quantity }) => (
              <li key={_id}>
                <StyledLink href={`/${_id}`}>
                  {name} {"x "}
                  {quantity}
                </StyledLink>
              </li>
            ))}
      </StyledList>
      <StyledHeading>Fruits and Veggies</StyledHeading>
      <StyledList>
        {data
          .filter(({ category }) => category === "Fruit")
          .map(({ _id, name, quantity }) => (
            <li key={_id}>
              {isChecked ? (
                <StyledLink $green="green" href={`/${_id}`}>
                  {name}
                </StyledLink>
              ) : (
                <StyledLink href={`/${_id}`}>
                  {name} {"x "}
                  {quantity}
                </StyledLink>
              )}
            </li>
          ))}
      </StyledList>
      <StyledHeading>Drogerie</StyledHeading>
      <StyledList>
        {data &&
          data
            .filter(({ category }) => category === "Drogerie")
            .map(({ _id, name, quantity }) => (
              <li key={_id}>
                <StyledLink href={`/${_id}`}>
                  {name} {"x "}
                  {quantity}
                </StyledLink>
              </li>
            ))}
      </StyledList>
    </>
  );
}
