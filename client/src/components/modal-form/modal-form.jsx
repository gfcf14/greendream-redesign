import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Flex, Link } from 'rebass';
import classNames from 'classnames';
import { FormButton, FormField } from 'components';
import {
  ACTION_BUTTONS_MESSAGES,
  EMAIL_REGEX,
  FORM_ERROR_MESSAGES,
  FORM_TITLES,
} from 'utils/constants';
import { allTrue, capitalizeFromLower, sendMail } from 'utils/helpers';
import { MESSAGES, MIN_MESSAGE_LENGTH } from 'utils/messages';
import './modal-form.scss';

let modalForm = '';

const initialFormsStates = {
  contact: {
    name: '',
    email: '',
    message: '',
    errors: {
      name: false,
      email: false,
      message: false,
    },
  },
  signin: {
    username: '',
    password: '',
    errors: {
      username: false,
      password: false,
    },
  },
  signup: {
    name: '',
    email: '',
    sex: '',
    pic: '',
    username: '',
    password: '',
    repeat: '',
    message: '',
    errors: {
      name: false,
      email: false,
      sex: false,
      pic: false,
      username: false,
      password: false,
      repeat: false,
      message: false,
    },
  },
};

function fieldHasError(name, value) {
  value = value.trim();

  switch (name) {
    case 'name':
      return value.length === 0;
    case 'email':
      return value.length === 0 || !EMAIL_REGEX.test(value);
    case 'message':
      return value.length === 0 || value.length < MIN_MESSAGE_LENGTH;
    default:
      return false;
  }
}

function formIsComplete(form) {
  return allTrue(
    Object.keys(form.errors).map(key => !fieldHasError(key, form[key]))
  );
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
    };

    return <FormField key={field.key} {...formFieldProps} />;
  });
}

function renderInstructionsText(type) {
  switch (type) {
    case 'contact': {
      return (
        <p className="form-instructions">
          {`${MESSAGES.FORM_INSTRUCTIONS}`}
        </p>
      );
    }
    case 'signup': {
      return (
        <p className="form-instructions">
          {`${MESSAGES.FORM_INSTRUCTIONS} ${MESSAGES.FORM_COMPLETION}`}
        </p>
      );
    }
    default: {
      return null;
    }
  }
}

function renderActionButton(type, form) {
  const formButtonProps = {
    buttonText: ACTION_BUTTONS_MESSAGES[`${type}`],
    isSubmit: true,
    errors: form[`${type}`].errors,
    complete: !!formIsComplete(form[`${type}`]),
  };

  return <FormButton {...formButtonProps} />;
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
    case 'name': {
      return `${capitalizeFromLower(errorKey)} ${FORM_ERROR_MESSAGES[`${errorKey}`]}`;
    }
    case 'email': {
      if (errorFound) {
        return FORM_ERROR_MESSAGES[`${errorKey}`];
      }

      return `${capitalizeFromLower(errorKey)} ${MESSAGES.FORM_ERROR_REQUIRED}`;
    }
    case 'pic': { // must change to reflect file upload
      return FORM_ERROR_MESSAGES[`${errorKey}`];
    }
    case 'username':
    case 'password':
    case 'repeat': {
      if (errorFound) {
        return FORM_ERROR_MESSAGES[`${errorKey}`];
      }

      return `${capitalizeFromLower(errorKey)} ${MESSAGES.FORM_ERROR_REQUIRED}`;
    }
    case 'message': {
      if (errorFound && errorFound.length < MIN_MESSAGE_LENGTH) {
        return FORM_ERROR_MESSAGES[`${errorKey}`];
      }

      return `${capitalizeFromLower(errorKey)} ${MESSAGES.FORM_ERROR_REQUIRED}`;
    }
    default: {
      return null;
    }
  }
}

function renderErrorArea(type, form) {
  return (
    <Flex
      className={classNames(
        'error-area',
        hasError(form[`${type}`].errors) !== -1 ? 'error' : '',
      )}
    >
      <span className="error-text">
        {getErrorMessage(form[`${type}`])}
      </span>
    </Flex>
  );
}

/* eslint-disable jsx-a11y/anchor-is-valid */
function renderExternalLink(type) {
  return type === 'signin' ? (
    <Link className="external-link" href="#">
      {MESSAGES.FORM_FORGOT}
    </Link>
  ) : null;
}
/* eslint-enable jsx-a11y/anchor-is-valid */

function resetForm(form, setForm, type) {
  const { contact, signin, signup } = form;

  setForm({
    contact,
    signin,
    signup,
    [type]: {
      ...initialFormsStates[`${type}`],
    },
  });
}

function hideIfOut(modal) {
  if (modal === -1) {
    modalForm.classList.add('should-hide');
  }
}

export function ModalForm({
  config,
  modal,
  fadeOut,
  isBigger,
  showStatsBar,
}) {
  const { type } = config;
  const [form, setForm] = useState({
    contact: initialFormsStates['contact'],
    signin: initialFormsStates['signin'],
    signup: initialFormsStates['signup'],
  });

  useEffect(() => {
    modalForm = document.querySelector('.modal-form-rct-component');
    if (modalForm) {
      modalForm.classList.add('should-hide');
    }
  }, []);

  function onChange(e) {
    const { name, value } = e.target;
    const currentForm = form[`${type}`];
    const { contact, signin, signup } = form;

    setForm({
      contact,
      signin,
      signup,
      [type]: {
        ...currentForm,
        [name]: value || '',
        errors: {
          ...currentForm.errors,
          [name]: currentForm.errors[name] ? fieldHasError(name, value) : currentForm.errors[name],
        },
      },
    });
  }

  function onBlur(e) {
    const { name, value } = e.target;
    const currentForm = form[`${type}`];
    const { contact, signin, signup } = form;

    setForm({
      contact,
      signin,
      signup,
      [type]: {
        ...currentForm,
        errors: {
          ...currentForm.errors,
          [name]: fieldHasError(name, value),
        },
      },
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    switch (type) {
      case 'contact': {
        const currentForm = form[`${type}`];

        const sendMessage = await sendMail('contact', '', {
          contactName: currentForm.name,
          contactEmail: currentForm.email,
          contactMessage: currentForm.message,
        });

        if (sendMessage === 'success') {
          resetForm(form, setForm, type);
          fadeOut();
          showStatsBar(MESSAGES.STATS_CONTACT_SUCCESS, false);
        } else {
          showStatsBar(MESSAGES.STATS_CONTACT_ERROR, true);
          console.err(sendMessage); // eslint-disable-line no-console
        }
        break;
      }
      default:
        break;
    }
  }

  const fieldFunctions = {
    onChange,
    onBlur,
  };

  return (
    <Flex
      as="form"
      className={classNames(
        'modal-form-rct-component',
        modal >= 0 ? 'modal' : '',
        isBigger && type === 'signup' ? 'bigger' : '',
      )}
      onSubmit={e => handleSubmit(e)}
      onTransitionEnd={() => hideIfOut(modal)}
    >
      <Flex className="modal-form-rct-component__title-bar">
        <p className="title-text">
          {FORM_TITLES[`${type}`]}
        </p>
        <Flex className="close-button" onClick={() => fadeOut()}>
          <span>X</span>
        </Flex>
      </Flex>
      <Flex className="modal-form-rct-component__field-container">
        {renderInstructionsText(type)}
        {renderByConfig(config, form[`${type}`], fieldFunctions)}
        {renderExternalLink(type)}
        {renderErrorArea(type, form)}
        {renderActionButton(type, form)}
      </Flex>
    </Flex>
  );
}

ModalForm.propTypes = {
  config: PropTypes.shape({
    type: PropTypes.oneOf(['contact', 'signup', 'signin']).isRequired,
    fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  modal: PropTypes.number.isRequired,
  fadeOut: PropTypes.func.isRequired,
  isBigger: PropTypes.bool.isRequired,
  showStatsBar: PropTypes.func.isRequired,
};

