import TitleBar from "../Title/Title.styled";
import styled from "styled-components";
import Head from "next/head.js";
import NavBar from "../Navigation";

const Main = styled.main`
  display: grid;
  gap: 0.5rem;
  margin-top: 6rem;
  padding: 0.5rem;
  position: relative;
  width: 100%;
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Shopping List</title>
      </Head>
      <TitleBar />
      <Main>{children}</Main>
      {/* <NavBar /> */}
    </>
  );
}
