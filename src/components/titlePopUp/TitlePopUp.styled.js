import Typography from 'components/typography/Typography';

import styled from '@emotion/styled';

export const Title = styled(Typography)(props => ({
  margin: ' 0 0 24px 0',
  color: props.theme.palette.text.primary,
}));
