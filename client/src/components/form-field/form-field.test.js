import React from 'react';
import { FormField } from 'components';
import { FIELD_TEXTS } from 'utils/constants';

describe('FormField Component Unit Test', () => {
  const formFieldProps = {
    formType: 'contact',
    fieldType: 'name',
    value: '',
    error: false,
    onChange: jest.fn(),
    onBlur: jest.fn(),
    formClass: 'modal',
  };

  const wrapper = mountWithIntl(
    <FormField {...formFieldProps} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('checks that the correct field is rendered given a value of name', () => {
    expect(wrapper.find('input')).toHaveLength(1);
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('checks that the correct placeholder text is rendered', () => {
    expect(wrapper.find('input').props().placeholder).toEqual(FIELD_TEXTS[`${formFieldProps.fieldType}`]);
  });

  it('checks that the onChange function is called correctly', () => {
    wrapper.find('input').simulate('change', { target: { value: 'test' } });
    expect(formFieldProps.onChange).toHaveBeenCalled();
  });

  it('checks that the onBlur function is called correctly', () => {
    wrapper.find('input').simulate('blur');
    expect(formFieldProps.onBlur).toHaveBeenCalled();
  });
});

