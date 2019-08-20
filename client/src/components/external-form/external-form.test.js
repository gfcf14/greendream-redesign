import React from 'react';
import { ExternalForm } from 'components';

describe('ExternalForm Component Unit Test', () => {
  const externalFormProps = {
    configKey: 'recovery',
    setFormError: jest.fn(),
    setSubmitted: jest.fn(),
    passwordToken: '4dD5eE6fF',
  };

  const wrapper = mountWithIntl(
    <ExternalForm {...externalFormProps} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('checks that the setFormError function is called', () => {
    wrapper.find('.form-field-rct-component__input').simulate('change');
    expect(externalFormProps.setFormError).toHaveBeenCalled();
  });
});
