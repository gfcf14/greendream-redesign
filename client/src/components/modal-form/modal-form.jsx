import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Flex, Link } from 'rebass';
import classNames from 'classnames';
import { FormButton, FormField } from 'components';
import {
  ACCEPTED_IMAGE_TYPES,
  ACTION_BUTTONS_MESSAGES,
  EMAIL_REGEX,
  FORM_CONFIGS,
  FORM_ERROR_MESSAGES,
  FORM_STATS_MESSAGES,
  FORM_TITLES,
  SERVER_ADDRESS,
} from 'utils/constants';
import {
  allTrue,
  capitalizeFromLower,
  insertRow,
  sendMail,
  signIn,
} from 'utils/helpers';
import { MESSAGES, MIN_MESSAGE_LENGTH } from 'utils/messages';
import './modal-form.scss';

let modalForm = '';

const initialFormsStates = {
  contact: {
    name: '',
    email: '',
    message: '',
    complete: {
      name: false,
      email: false,
      message: false,
    },
    errors: {
      name: false,
      email: false,
      message: false,
    },
  },
  signin: {
    username: '',
    password: '',
    complete: {
      username: false,
      password: false,
    },
    errors: {
      username: false,
      password: false,
    },
    loginError: '',
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
    complete: {
      name: false,
      email: false,
      sex: false,
      pic: false,
      username: false,
      password: false,
      repeat: false,
      message: false,
    },
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

function userNameExists(value) {
  return axios.get(`${SERVER_ADDRESS}/user`, {
    params: {
      userName: value,
    },
  }).then(response => response.data)
    .then(data => data.length > 0);
}

// for the repeat password in sign up forms only
function isTheSamePassword(value, currentForm) {
  return value === currentForm['password'];
}

function isNotAcceptedExtension(value) {
  // for when the default checkbox is checked
  if (value === 'default') {
    return false;
  }

  // for when the default checkbox is unchecked
  if (value === '') {
    return true;
  }

  const fileType = value.type.replace('image/', '');

  return !ACCEPTED_IMAGE_TYPES.includes(fileType);
}

function isNotAcceptedSize(value) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img.width > 150 && img.height > 150);
    img.onerror = reject;
    img.src = URL.createObjectURL(value);
  });
}

async function picHasError(value) {
  const defaultCheck = document.querySelector('.check-box');

  if (defaultCheck.checked) {
    return false;
  }

  if (isNotAcceptedExtension(value)) {
    return true;
  }

  if (await isNotAcceptedSize(value)) {
    return true;
  }

  return false;
}

async function fieldHasError(name, value, currentForm, type) {
  value = name !== 'pic' ? value.trim() : value;

  switch (name) {
    case 'name':
    case 'password':
      return value.length === 0;
    case 'email':
      return value.length === 0 || !EMAIL_REGEX.test(value);
    case 'message':
      return value.length === 0 || value.length < MIN_MESSAGE_LENGTH;
    case 'username': {
      if (type === 'signup') {
        const userExists = await userNameExists(value);
        return value.length === 0 || userExists;
      }

      return value.length === 0;
    }
    case 'repeat':
      return value.length === 0 || !isTheSamePassword(value, currentForm);
    case 'pic':
      return value === undefined || picHasError(value);
    default:
      return false;
  }
}

function formIsComplete(form) {
  return allTrue(
    Object.keys(form.complete).map(key => form.complete[key] === true)
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
      selectedSex: value === 'pic' ? form['sex'] : '',
      formClass: 'modal',
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
    loginError: form['signin'].loginError,
    formType: type,
  };

  return <FormButton {...formButtonProps} />;
}

function hasError(errors) {
  return Object.values(errors).findIndex(e => e === true);
}

function getErrorMessage(form) {
  if (form.loginError === 'invalid') {
    return MESSAGES.FORM_ERROR_SIGNIN_INVALID;
  }

  if (form.loginError === 'unconfirmed') {
    return MESSAGES.FORM_ERROR_SIGNIN_UNCONFIRMED;
  }

  const { errors } = form;

  const errorIndex = hasError(errors);

  if (errorIndex === -1) {
    return null;
  }

  const errorKey = Object.keys(errors)[errorIndex];
  const errorFound = form[`${errorKey}`];

  switch (errorKey) {
    case 'name':
    case 'password': {
      return `${capitalizeFromLower(errorKey)} ${MESSAGES.FORM_ERROR_REQUIRED}`;
    }
    case 'email': {
      if (errorFound) {
        return FORM_ERROR_MESSAGES[`${errorKey}`];
      }

      return `${capitalizeFromLower(errorKey)} ${MESSAGES.FORM_ERROR_REQUIRED}`;
    }
    case 'pic': {
      // blank image error
      if (errorFound.type === undefined) {
        return `${MESSAGES.FORM_ERROR_AN_IMAGE} ${MESSAGES.FORM_ERROR_REQUIRED}`;
      }

      // wrong format error
      if (isNotAcceptedExtension(errorFound)) {
        return MESSAGES.FORM_ERROR_IMAGE_1;
      }

      // wrong size error
      return FORM_ERROR_MESSAGES[`${errorKey}`];
    }
    case 'username': {
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
  const { loginError } = form['signin'];
  const loginFail = !(loginError === 'success' || loginError === '');
  const showError = hasError(form[`${type}`].errors) !== -1 || (type === 'signin' && loginFail);

  return (
    <Flex
      className={classNames(
        'error-area',
        showError ? 'error' : '',
      )}
    >
      <span className="error-text">
        {getErrorMessage(form[`${type}`])}
      </span>
    </Flex>
  );
}

function renderExternalLink(type) {
  return type === 'signin' ? (
    <Link className="external-link" href={`${process.env.PUBLIC_URL}/recovery`}>
      {MESSAGES.FORM_FORGOT}
    </Link>
  ) : null;
}

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

function formSuccess(fadeOut, showStatsBar, form, setForm, type) {
  resetForm(form, setForm, type);
  fadeOut();
  showStatsBar(FORM_STATS_MESSAGES.success[`${type}`], false, type === 'signin');
}

function formFailure(fadeOut, showStatsBar, type, errorResponse) {
  fadeOut();
  showStatsBar(FORM_STATS_MESSAGES.failure[`${type}`], true, false);
  console.error(errorResponse); // eslint-disable-line no-console
}

async function signUpSubmit(imageData, fadeOut, form, setForm, showStatsBar, type) {
  const {
    name,
    email,
    sex,
    username,
    password,
    message,
  } = form[`${type}`];

  const insertUser = await insertRow('Users', {
    name,
    email,
    sex,
    img: imageData,
    username,
    password,
    about: message,
  });

  if (insertUser === 'success') {
    formSuccess(fadeOut, showStatsBar, form, setForm, type);
  } else {
    formFailure(fadeOut, showStatsBar, type, insertUser);
  }
}

async function setUpSignUp(e, fadeOut, form, setForm, showStatsBar, type) {
  const imageData = e.target.result;
  signUpSubmit(imageData, fadeOut, form, setForm, showStatsBar, type);
}

export function ModalForm({
  config,
  modal,
  fadeOut,
  isBigger,
  showStatsBar,
}) {
  const { type } = config || '';
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

  async function onChange(e) {
    const { name, value } = e.target;
    const currentForm = form[`${type}`];
    const { contact, signin, signup } = form;

    const newValue = name === 'pic' && (value !== 'default' && value !== '')
      ? e.target.files[0] : value;

    const currentFieldHasError = await fieldHasError(name, newValue, currentForm, type);

    const setFieldError = currentForm.errors[name] || name === 'pic' ?
      currentFieldHasError : currentForm.errors[name];

    setForm({
      contact,
      signin,
      signup,
      [type]: {
        ...currentForm,
        [name]: newValue || '',
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
  }

  async function onBlur(e) {
    const { name, value } = e.target;
    const currentForm = form[`${type}`];
    const { contact, signin, signup } = form;

    const newValue = name === 'pic' ? e.target.files[0] : value;
    const currentFieldHasError = await fieldHasError(name, newValue, currentForm, type);

    setForm({
      contact,
      signin,
      signup,
      [type]: {
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
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const currentForm = form[`${type}`];

    switch (type) {
      case 'contact': {
        const { name, email, message } = currentForm;

        const sendMessage = await sendMail('contact', '', {
          contactName: name,
          contactEmail: email,
          contactMessage: message,
        });

        if (sendMessage === 'success') {
          formSuccess(fadeOut, showStatsBar, form, setForm, type);
        } else {
          formFailure(fadeOut, showStatsBar, type, sendMessage);
        }
        break;
      }
      case 'signin': {
        const { username, password } = currentForm;

        const signInAttempt = await signIn('Users', username, password);

        if (signInAttempt.status === 'success') {
          Cookies.set('greendream-user', signInAttempt.data[0].username, { expires: 7 });

          formSuccess(fadeOut, showStatsBar, form, setForm, type);
        } else {
          const { contact, signup } = form;

          setForm({
            contact,
            signup,
            signin: {
              ...currentForm,
              loginError: signInAttempt.status,
            },
          });
        }
        break;
      }
      case 'signup': {
        const picReader = new FileReader();

        if (currentForm['pic'] === 'default') {
          signUpSubmit(currentForm['pic'], fadeOut, form, setForm, showStatsBar, type);
        } else {
          picReader.addEventListener('load', event => setUpSignUp(event, fadeOut, form, setForm, showStatsBar, type));
          picReader.readAsDataURL(currentForm['pic']);
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

  const mustShowForm = modal >= 0 && modal < FORM_CONFIGS.length;

  return (
    <Flex
      as="form"
      className={classNames(
        'modal-form-rct-component',
        mustShowForm ? 'modal' : '',
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
        {mustShowForm ? renderInstructionsText(type) : null}
        {mustShowForm ? renderByConfig(config, form[`${type}`], fieldFunctions) : null}
        {mustShowForm ? renderExternalLink(type) : null}
        {mustShowForm ? renderErrorArea(type, form) : null}
        {mustShowForm ? renderActionButton(type, form) : null}
      </Flex>
    </Flex>
  );
}

ModalForm.propTypes = {
  config: PropTypes.shape({
    type: PropTypes.oneOf(['contact', 'signup', 'signin']).isRequired,
    fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
  modal: PropTypes.number.isRequired,
  fadeOut: PropTypes.func.isRequired,
  isBigger: PropTypes.bool.isRequired,
  showStatsBar: PropTypes.func.isRequired,
};

ModalForm.defaultProps = {
  config: {
    type: 'contact',
    fields: [{}],
  },
};

