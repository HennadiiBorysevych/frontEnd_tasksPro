import styled from '@emotion/styled';

export const SupportBox = styled.button(
  {
    padding: '14px',
    display: 'block',
    borderRadius: '8px',
    textAlign: 'left',
    margin: '40px 14px 24px',
    transition: 'box-shadow 0.3s, transform 0.3s',
  },
  props => ({
    backgroundColor: props.theme.palette.background.support,

    [props.theme.breakpoints.up('medium')]: {
      padding: '20px',
      margin: '40px 24px 24px',
    },

    '&:hover': {
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      transform: 'scale(1.02)',
    },
  })
);

export const SupportPlate = styled.div`
  /* display: block; */
  margin-bottom: 14px;
`;

export const SupportOffer = styled.p(
  {
    marginBottom: '18px',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '16px',
    letterSpacing: '-0.24px',
  },
  props => ({
    [props.theme.breakpoints.up('medium')]: {
      fontSize: '14px',
      lineHeight: '1.43',
    },
  })
);

export const AppName = styled.span(props => ({
  color: props.theme.palette.accent.main,
}));

export const SupportQuestion = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TextHelp = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.24px;
`;
