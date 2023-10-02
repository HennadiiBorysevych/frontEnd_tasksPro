import { POP_UP_INITIAL_VALUES } from 'constants';

import { changePasswordSchema, sendEmailSchema } from 'helpers';
import { usePassword } from 'hooks';

import { CommonPopUp } from 'ui';

import { Background, Container } from './styles/commonStyles.styled';

const { recoveryPasswordValues } = POP_UP_INITIAL_VALUES;

const PasswordPage = () => {
  const { inputs, passwordToken, handleChange, onHandleSubmit } = usePassword();

  return (
    <Background>
      <Container>
        <CommonPopUp
          title={passwordToken ? 'Change password' : 'Password recovery'}
          onSubmit={onHandleSubmit}
          onChange={handleChange}
          inputs={inputs}
          initialValues={recoveryPasswordValues}
          validationSchema={
            passwordToken ? changePasswordSchema : sendEmailSchema
          }
          buttonText={passwordToken ? 'Change your password' : 'Send email'}
          variantMarginTop="formPopUp"
          variantMarginBottom="passwordForm"
          variantMessage="authForm"
          variantForm="passwordForm"
          id="recovery-password-submit-button"
        />
      </Container>
    </Background>
  );
};

export default PasswordPage;
