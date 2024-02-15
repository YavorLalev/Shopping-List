import { StyledForm, StyledHeading, StyledLabel } from "./ProductForm.styled";
import { StyledButton } from "../Button/Button.styled";
import useSWR from "swr";

export default function ProductForm({ onSubmit, isEditMode }) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledHeading>
        {isEditMode ? "Edit Product" : "Add a new Product"}
      </StyledHeading>
      <StyledLabel htmlFor="name">
        Name:
        <input type="text" id="name" name="name" />
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input type="text" id="description" name="description" />
      </StyledLabel>

      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}
