import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Flex } from 'rebass';
import { ExternalButton, FormField } from 'components';
import {
  EMAIL_REGEX,
  EXTERNAL_BUTTONS_MESSAGES,
  EXTERNAL_FORM_CONFIGS,
  FORM_ERROR_MESSAGES,
} from 'utils/constants';
import {
  allTrue,
  capitalizeFromLower,
  recoverData,
  updatePassword,
} from 'utils/helpers';
import { MESSAGES } from 'utils/messages';
import './external-form.scss';

const initialFormsStates = {
  change: {
    password: '',
    repeat: '',
    complete: {
      password: false,
      repeat: false,
    },
    errors: {
      password: false,
      repeat: false,
    },
  },
  recovery: {
    forgot: '',
    email: '',
    complete: {
      forgot: false,
      email: false,
    },
    errors: {
      forgot: false,
      email: false,
    },
  },
};

function isTheSamePassword(name, value, currentForm) {
  const checkField = name === 'password' ? 'repeat' : 'password';

  return currentForm[`${checkField}`] !== '' ? value === currentForm[`${checkField}`] : true;
}

function fieldHasError(name, value, currentForm) {
  switch (name) {
    case 'email': {
      return value.length === 0 || !EMAIL_REGEX.test(value);
    }
    case 'password': {
      return value.length === 0 || !isTheSamePassword(name, value, currentForm);
    }
    case 'repeat': {
      return value.length === 0 || !isTheSamePassword(name, value, currentForm);
    }
    default: {
      return false;
    }
  }
}

function formIsComplete(form) {
  return allTrue(
    Object.keys(form.complete).map(key => form.complete[key] === true)
  );
}

function getConfig(configKey) {
  const configIndex = EXTERNAL_FORM_CONFIGS.findIndex(config => config.type === configKey);

  return EXTERNAL_FORM_CONFIGS[configIndex];
}

function formHasError(errors) {
  return Object.values(errors).find(e => e === true);
}

function renderByConfig(config, form, fieldFunctions) {
  return config.fields.map((field) => {
    const { type } = config;
    const { value } = field;

    const formFieldProps = {
      fieldType: value,
      formType: type,
      value: form[`${value}`],
      error: form.errors[`${value}`],
      ...fieldFunctions,
      selectedSex: value === 'pic' ? form['sex'] : '',
      formClass: 'external',
    };

    return <FormField key={field.key} {...formFieldProps} />;
  });
}

function hasError(errors) {
  return Object.values(errors).findIndex(e => e === true);
}

function getErrorMessage(form) {
  const { errors } = form;

  const errorIndex = hasError(errors);

  if (errorIndex === -1) {
    return null;
  }

  const errorKey = Object.keys(errors)[errorIndex];
  const errorFound = form[`${errorKey}`];

  switch (errorKey) {
    case 'password': {
      if (errorFound) {
        return FORM_ERROR_MESSAGES[`${errorKey}`];
      }

      return `${capitalizeFromLower(errorKey)} ${MESSAGES.FORM_ERROR_REQUIRED}`;
    }
    case 'email': {
      if (errorFound) {
        return FORM_ERROR_MESSAGES[`${errorKey}`];
      }

      return `${capitalizeFromLower(errorKey)} ${MESSAGES.FORM_ERROR_REQUIRED}`;
    }
    case 'repeat': {
      if (errorFound) {
        return FORM_ERROR_MESSAGES[`${errorKey}`];
      }

      return MESSAGES.FORM_ERROR_REPEAT;
    }
    default: {
      return null;
    }
  }
}

function renderErrorArea(type, form) {
  return (
    <span className="external-form-rct-component__error-text">
      {getErrorMessage(form[`${type}`])}
    </span>
  );
}

function renderExternalButton(configKey, form) {
  const externalButtonProps = {
    buttonText: EXTERNAL_BUTTONS_MESSAGES[`${configKey}`],
    isSubmit: true,
    errors: form[`${configKey}`].errors,
    complete: !!formIsComplete(form[`${configKey}`]),
  };

  return <ExternalButton {...externalButtonProps} />;
}

export function ExternalForm(props) {
  const {
    configKey,
    setFormError,
    setSubmitted,
    passwordToken,
  } = props;

  const [form, setForm] = useState({
    change: initialFormsStates['change'],
    recovery: initialFormsStates['recovery'],
  });

  async function onChange(e) {
    const { name, value } = e.target;
    const currentForm = form[`${configKey}`];
    const { change, recovery } = form;

    const currentFieldHasError = fieldHasError(name, value, currentForm);
    const setFieldError = currentForm.errors[name] ?
      currentFieldHasError : currentForm.errors[name];
    const errorInForm = formHasError(currentForm.errors);
    const backgroundStatus = !currentFieldHasError && errorInForm ?
      errorInForm : currentFieldHasError;

    setForm({
      change,
      recovery,
      [configKey]: {
        ...currentForm,
        [name]: value || '',
        complete: {
          ...currentForm.complete,
          [name]: !currentFieldHasError,
        },
        errors: {
          ...currentForm.errors,
          [name]: setFieldError,
        },
      },
    });

    setFormError(backgroundStatus);
  }

  async function onKeyUp(e) {
    const { name, value } = e.target;
    const currentForm = form[`${configKey}`];

    const currentFieldHasError = fieldHasError(name, value, currentForm);
    const errorInForm = formHasError(currentForm.errors);
    const backgroundStatus = !currentFieldHasError && errorInForm ?
      errorInForm : currentFieldHasError;

    setFormError(backgroundStatus);
  }

  async function onBlur(e) {
    const { name, value } = e.target;
    const currentForm = form[`${configKey}`];
    const { change, recovery } = form;

    const currentFieldHasError = fieldHasError(name, value, currentForm);

    setForm({
      change,
      recovery,
      [configKey]: {
        ...currentForm,
        complete: {
          ...currentForm.complete,
          [name]: !currentFieldHasError,
        },
        errors: {
          ...currentForm.errors,
          [name]: currentFieldHasError,
        },
      },
    });

    setFormError(currentFieldHasError ? true : formHasError(currentForm.errors));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const currentForm = form[`${configKey}`];

    switch (configKey) {
      case 'change': {
        const { password } = currentForm;
        const changeFields = {
          password,
          token: passwordToken,
        };

        const changeResponse = await updatePassword(changeFields);

        if (changeResponse === 'error') {
          setFormError(true);
        }
        setSubmitted(changeResponse);
        break;
      }
      case 'recovery': {
        const { email, forgot } = currentForm;
        const recoverFields = {
          email,
          value: forgot,
        };

        const recoverResponse = await recoverData(recoverFields);

        if (recoverResponse === 'error') {
          setFormError(true);
        }
        setSubmitted(recoverResponse);
        break;
      }
      default:
        break;
    }
  }

  const fieldFunctions = {
    onChange,
    onKeyUp,
    onBlur,
  };

  return (
    <Flex
      as="form"
      className={classNames(
        'external-form-rct-component',
      )}
      onSubmit={e => handleSubmit(e)}
    >
      {renderByConfig(getConfig(configKey), form[`${configKey}`], fieldFunctions)}
      {renderErrorArea(configKey, form)}
      {renderExternalButton(configKey, form)}
    </Flex>
  );
}

ExternalForm.propTypes = {
  configKey: PropTypes.string.isRequired,
  setFormError: PropTypes.func.isRequired,
  setSubmitted: PropTypes.func.isRequired,
  passwordToken: PropTypes.string,
};

ExternalForm.defaultProps = {
  passwordToken: '',
};
