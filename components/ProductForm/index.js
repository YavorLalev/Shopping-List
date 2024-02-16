import { StyledForm, StyledHeading, StyledLabel } from "./ProductForm.styled";
import { StyledButton } from "../Button/Button.styled";

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
      <StyledLabel htmlFor="category">
        Category:
        <select id="category" name="category">
          <option value="Fruit">Fruit</option>
          <option value="Food">Food</option>
        </select>
      </StyledLabel>

      <StyledButton type="submit"> Submit </StyledButton>
    </StyledForm>
  );
}
