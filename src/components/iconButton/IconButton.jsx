import { SvgIcon } from 'components';

import { ButtonStyled } from './IconButton.styled';

const IconButton = ({ onClick, svgName }) => {
  return (
    <>
      <ButtonStyled type="button" onClick={onClick}>
        <SvgIcon svgName={svgName} size={16} stroke="#FFFFFF80" />
      </ButtonStyled>
    </>
  );
};

export default IconButton;
