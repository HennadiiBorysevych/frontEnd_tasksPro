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

          /**Register, LogIn */
          --bgColorAuth: #151515;
          --inputBgColor: #1f1f1f;
          --inputBorderColor: rgb(190, 219, 176, 0.5);
          --inputBorderFocus: #bedbb0;
          --buttonColor: #161616;

          /** Priority Colors*/
          --defaultPriorityColor: rgba(255, 255, 255, 0.3)
          --lowPriorityColor: #8fa1d0;
          --mediumPriorityColor: #e09cb5;
          --highPriorityColor: #bedbb0;
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
  h4,
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
