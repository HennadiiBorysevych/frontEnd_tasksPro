import { Global } from '@emotion/react';
const GlobalStyles = () => {
  return (
    <Global
      styles={`
        :root {
          /** WelcomePage */
          --welcomeBgColor: linear-gradient(
            180deg,
            #ffffff 0%,
            #ffffff 25%,
            #bedbb0 92.19%
          );

          /** breakpoints */
          --xs: '320px';
          --preSmall: '375px';
          --small: '376px';
          --preMedium: '767px';
          --medium: '768px';
          --preLarge: '1439px';
          --large: '1440px';
        }

        #root {
          padding: 0;
        }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-repeat: no-repeat;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
  }
      `}
    />
  );
};
export default GlobalStyles;
