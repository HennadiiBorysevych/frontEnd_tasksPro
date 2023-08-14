import { SvgIcon } from 'components';

import { ButtonStyled } from './IconButton.styled';

const IconButton = ({ onClick, svgName }) => {
  return (
    <>
      <ButtonStyled type="button" onClick={onClick}>
        <SvgIcon svgName={svgName} size={16} variant="popUp"  />
      </ButtonStyled>
    </>
  );
};

export default IconButton;
