import styled from '@emotion/styled/macro';
import TextField from '@mui/material/TextField';

export const Header = styled.div(props => ({
  display: 'flex',
  alignItems: 'center',
  gap: '40px',
  justifyContent: props.boardName ? 'space-between' : 'flex-end',
  marginBottom: '39px',
  width: '100%',

  [props.theme.breakpoints.up('medium')]: {
    marginBottom: '26px',
  },

  [props.theme.breakpoints.up('large')]: {
    marginBottom: '10px',
  },
}));

export const FieldInput = styled(TextField)(
  {
    '& .MuiInput-underline:after': {
      borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E0E3E7',
      },
    },
  }
  // props => ({
  //   textShadow: `0.5px 0 3px ${props.theme.palette.text.shadowColor}`,
  //   cursor: 'pointer',
  // })
);
