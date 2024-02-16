import styled from "styled-components";

const Headline = styled.h1`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  margin: 0;
  padding: 20px;
  font-weight: 600;
  text-align: center;
  z-index: 1;
`;

export default function TitleBar() {
  return (
    <Headline>
      <span> 🛒 </span> Shopping List <span> 🛍️ </span>{" "}
    </Headline>
  );
}
