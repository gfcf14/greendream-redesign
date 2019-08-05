import React from 'react';
import { FormRadio } from 'components';

describe('FormRadio Component Unit Test', () => {
  const formRadioProps = {
    text: 'A Male',
    value: 'm',
    onChange: jest.fn(),
    isChecked: '',
  };

  const wrapper = mountWithIntl(
    <FormRadio {...formRadioProps} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('checks that the text was correctly passed', () => {
    expect(wrapper.find('span').text()).toEqual(formRadioProps.text);
  });

  it('checks that the value was correctly passed', () => {
    expect(wrapper.find('input').props().value).toEqual(formRadioProps.value);
  });

  it('checks that the onChange function was called', () => {
    wrapper.find('input').simulate('change');

    expect(formRadioProps.onChange).toHaveBeenCalled();
  });
});

