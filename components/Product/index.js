import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import styled from "styled-components";
import { StyledButton } from "../Button/Button.styled";
import { useState } from "react";
import ProductForm from "../ProductForm";

const ButtonContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [isEditMode, setIsEditMode] = useState(false);

  const { data, isLoading, mutate } = useSWR(id ? `/api/products/${id}` : null);

  async function handleEditProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      mutate();
    }
    event.target.reset();
  }

  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      await response.json();
      router.push("/");
    } else {
      console.error("Failed to delete product:", response.status);
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      {isEditMode && (
        <ProductForm isEditMode={isEditMode} onSubmit={handleEditProduct} />
      )}
      <h2>{data.name}</h2>
      <p>Quantity: {data.description}</p>
      <p>Category: {data.category}</p>
      <ButtonContainer>
        <StyledLink href="/">Back to all</StyledLink>
        <StyledButton
          type="button"
          onClick={() => {
            setIsEditMode(!isEditMode);
          }}
        >
          Edit
        </StyledButton>
        <StyledButton type="button" onClick={() => handleDeleteProduct(id)}>
          Delete
        </StyledButton>
      </ButtonContainer>
    </ProductCard>
  );
}
