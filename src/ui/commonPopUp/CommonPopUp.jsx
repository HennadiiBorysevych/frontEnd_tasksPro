import React from 'react';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

import Input from '../input/Input';
import PopUpLayout from '../popUpLayout/PopUpLayout';
import PrimaryButton from '../primaryButton/PrimaryButton';

import { ErrorMessage, Form, InputItem, InputList } from './commonPopUp.styled';
// всі необхідні стилі для елементів форми зібрані в стилях CommonPopUp
const CommonPopUp = ({
  id, // id вказується рядком з описом, що робить кнопка і якщо кнопка містить текст, наприклад, id='register-button'
  avatar, // це проп виключно для умови рендерингу додаткового інпута в ProfilePopUp, в інших місцях його вказувати не потрібно
  title, // назва форми, рядок, наприклад title='Recovery password'
  children, // якщо потрібно додати компоненти, в варіанті форм реєстрації/логіну компонент <GoogleAuth /> просто поміщується всередину CommonPopUp
  onChange, // проп функції, яка фіксує зміни в інпуті
  onClose, // тільки для модалок, закриття по кнопці
  onSubmit, // функція сабміту
  hasIcon, // для реєстраційних форм вказується hasICon={false}
  inputs, // масив об'єктів інпутів передається як inputs={inputs}, окремо описуються всі інпути. Приклади вже є в модалках
  initialValues, // імпортується з констант import { POP_UP_INITIAL_VALUES } from 'constants'; потім всередині компонента деструктуризується з відповідною назвоб об'єкта, наприклад, const { AuthValues } = POP_UP_INITIAL_VALUES;
  validationSchema, // імпортується з helpers/validationSchemas
  buttonText, // вказується рядком, якщо є умова, вказується за умовою
  variant, // для динамічного марджина PrimaryButton, в варіанті форм автентифікації вказується variant="formPopUp". Margin-top не передається в інлайн-стилях, як було до цього
  version, // тільки для кнопок дошки
  customInputProps, // кастомний проп, якщо потрібно додати функцію-обробник, опціонально
}) => {
  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues,
    onSubmit: values => {
      onSubmit(values);
    },
    validationSchema,
  });

  return (
    <PopUpLayout title={title} handleClose={onClose}>
      <Form onSubmit={handleSubmit}>
        {avatar && children}
        <InputList>
          {inputs.map(inputProps => (
            <InputItem key={inputProps?.name}>
              <Input
                name={inputProps?.name}
                type={inputProps?.type}
                multiline={inputProps?.multiline}
                placeholder={inputProps?.placeholder}
                onChange={e => {
                  handleChange(e);
                  onChange(e);
                  if (customInputProps && customInputProps[inputProps?.name]) {
                    customInputProps[inputProps?.name](e);
                  }
                }}
                value={values[inputProps?.name]}
              />

              {errors[inputProps?.name] && touched[inputProps?.name] ? (
                <ErrorMessage>{errors[inputProps?.name]}</ErrorMessage>
              ) : null}
            </InputItem>
          ))}
        </InputList>
        {!avatar && children}
        <PrimaryButton
          id={id}
          variant={variant}
          hasIcon={hasIcon}
          version={version}
          type="submit"
        >
          {buttonText}
        </PrimaryButton>
      </Form>
    </PopUpLayout>
  );
};

CommonPopUp.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  hasIcon: PropTypes.bool,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      multiline: PropTypes.bool,
    })
  ).isRequired,
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object,
  buttonText: PropTypes.string.isRequired,
  version: PropTypes.string,
  variant: PropTypes.string,
};

export default CommonPopUp;
