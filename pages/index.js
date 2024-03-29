import ProductList from "../components/ProductList";
import styled, { css } from "styled-components";
import ProductForm from "../components/ProductForm";
import useSWR from "swr";
import { useState } from "react";
import { StyledButton } from "@/components/Button/Button.styled";
import NavBar from "@/components/Navigation";

export default function HomePage() {
  const { mutate } = useSWR("/api/products");
  const [isChecked, setIsChecked] = useState(false);

  function handleToggle() {
    setIsChecked(!isChecked);
  }

  async function handleAddProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    }

    mutate();
    event.target.reset();
  }
  return (
    <>
      {isChecked ? (
        <ProductForm onSubmit={handleAddProduct} />
      ) : (
        <ProductList />
      )}
      <NavBar isChecked={isChecked} onClick={handleToggle} />
    </>
  );
}
