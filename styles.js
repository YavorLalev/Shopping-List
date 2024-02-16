import { createGlobalStyle } from "styled-components";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"] });

export default createGlobalStyle`
:root {
    --color-nemo: #ff4a11;
    --color-granite: #252629;
    --color-water-10: #f3f5f9;
    --color-foam: #ffffff;

  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    display: grid;
    margin: auto;
    font-family: ${workSans.style.fontFamily};
    place-items: center;
    max-width: 60rem;
  }
`;
