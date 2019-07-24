import React from 'react';
import { FormButton } from 'components';

describe('FormButton Component Unit Test', () => {
  const formButtonProps = {
    buttonText: 'sample',
    isSubmit: true,
  };

  const wrapper = mountWithIntl(
    <FormButton {...formButtonProps} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('checks that the button text was correctly passed', () => {
    expect(wrapper.find('button').text()).toEqual(formButtonProps.buttonText);
  });
});

