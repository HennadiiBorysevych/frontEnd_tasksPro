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

export const FieldInput = styled(TextField)(({ theme }) => ({
  '& .MuiInput-input': {
    cursor: 'pointer',
    textShadow: `0.5px 0 3px ${theme.palette.text.shadowColor}`,
    '&:hover': {
      textShadow: 'none',
      color: theme.palette.accent.light,
    },
  },
  '& .MuiInput-underline:after': {
    display: 'none',
  },
  '& .MuiInput-underline:before': {
    display: 'none',
  },
}));
