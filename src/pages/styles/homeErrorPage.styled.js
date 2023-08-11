import styled from '@emotion/styled';

function checkTxtColor({ txtColor }) {
  let color = '';

  switch (txtColor) {
    case 'dark':
      color = '#FFFFFF';
      break;
    case 'light':
      color = '#000000';
      break;
    case 'violet':
      color = '#FFFFFF';
      break;
    default:
      break;
  }
  return color;
}
function checkBtnTxtColor({ btnColor }) {
  let color = '';

  switch (btnColor) {
    case 'dark':
      color = '#161616';
      break;
    case 'light':
      color = '#161616';
      break;
    case 'violet':
      color = '#FFFFFF';
      break;
    default:
      break;
  }
  return color;
}

function checkBgColor({ bgColor }) {
  let color = '';

  switch (bgColor) {
    case 'dark':
      color = '#1F1F1F';
      break;
    case 'light':
      color = '#FDFDFD';
      break;
    case 'violet':
      color = '#D6D8FF';
      break;
    default:
      break;
  }
  return color;
}

function checkBtnBgColor({ btnBgColor }) {
  let color = '';

  switch (btnBgColor) {
    case 'dark':
      color = '#BEDBB0';
      break;
    case 'light':
      color = '#BEDBB0';
      break;
    case 'violet':
      color = '#9747FF';
      break;
    default:
      break;
  }
  return color;
}

export const Background = styled.section`
  min-width: 200px;
  min-height: 100vh;

  color: ${checkTxtColor};
  background-color: ${checkBgColor};

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  padding: 0 20px;
  min-width: 200px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 500px;
  }

  @media screen and (min-width: 1440px) {
    width: 1000px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;

  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Code = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 30px;
  line-height: 40px;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1440px) {
    font-size: 50px;
  }
`;

export const Num = styled.p`
  display: block;

  font-size: 60px;
  line-height: 60px;

  @media screen and (min-width: 1440px) {
    font-size: 100px;
    line-height: 100px;
  }
`;

export const Description = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 40px;

  text-align: center;

  @media screen and (min-width: 1440px) {
    font-size: 40px;
    line-height: 40px;
  }
`;

export const Start = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;

  @media screen and (max-width: 767px) {
    margin-bottom: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-weight: 600;
    font-size: 20px;
    line-height: 40px;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  margin-bottom: 14px;
`;

export const Link = styled.p`
  width: fit-content;

  margin: 0 auto;
  padding: 14px 25px;
  background-color: ${checkBtnBgColor};
  border-radius: 8px;
  margin-bottom: 14px;

  font-weight: 600;

  list-style: none;
  color: ${checkBtnTxtColor};

  @media screen and (min-width: 1440px) {
    padding: 14px 135px;
  }
`;
