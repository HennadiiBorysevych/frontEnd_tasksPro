import React from 'react';
import PropTypes from 'prop-types';

import { CommonForm } from 'components';

import PopUpLayout from '../popUpLayout/PopUpLayout';

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
  variantMarginTop, // для динамічного марджина PrimaryButton, в варіанті форм автентифікації вказується variant="formPopUp". Margin-top не передається в інлайн-стилях, як було до цього
  variantIcon, // варіанти іконок
  customInputProps, // кастомний проп, якщо потрібно додати функцію-обробник, опціонально
  settings, // булеве значення для вставки BoardSettings та CardSettings
  google, // булеве значення для вставки кнопки GoogleAuth
  destination, // призначення форми - або authForm - форма автентифікації, або інші popup
  variantMessage, // рядок "authForm" для стилів повідомлень про помилку при валідації форм

  variantMarginBottom, // string
  authInputsTabsReset, //Буль. для сброса значений инпутов при смене таба на логине/регистрации
  variantForm, //Строка, контролирубщая кнопку закрытия модалки

}) => {
  return (
    <>
      {destination !== 'authForm' ? (
        <PopUpLayout
          title={title}
          handleClose={onClose}
          variantForm={variantForm}
          variantMarginBottom={variantMarginBottom}
        >
          <CommonForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            avatar={avatar}
            inputs={inputs}
            onChange={onChange}
            customInputProps={customInputProps}
            settings={settings}
            id={id}
            variantIcon={variantIcon}
            hasIcon={hasIcon}
            variantMarginTop={variantMarginTop}
            buttonText={buttonText}
            google={google}
            children={children}
            variantMessage={variantMessage}
          />
        </PopUpLayout>
      ) : (
        <CommonForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          avatar={avatar}
          inputs={inputs}
          onChange={onChange}
          customInputProps={customInputProps}
          settings={settings}
          id={id}
          variantIcon={variantIcon}
          variantMarginTop={variantMarginTop}
          buttonText={buttonText}
          google={google}
          children={children}
          variantMessage={variantMessage}
          authInputsTabsReset={authInputsTabsReset}
        />
      )}
    </>
  );
};

CommonPopUp.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,
  onChange: PropTypes.func,
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
  initialValues: PropTypes.objectOf(PropTypes.string).isRequired,
  validationSchema: PropTypes.object,
  buttonText: PropTypes.string.isRequired,
  variantMarginTop: PropTypes.string,
  variantIcon: PropTypes.string,
  avatar: PropTypes.bool,
  settings: PropTypes.bool,
  google: PropTypes.bool,
  destination: PropTypes.string,
  variantMessage: PropTypes.string,
  variantMarginBottom: PropTypes.string,
  authInputsTabsReset: PropTypes.bool,
};

export default CommonPopUp;
