import React from 'react';
import { ExternalButton } from 'components';

describe('ExternalButton Component Unit Test', () => {
  const externalButtonProps = {
    buttonText: 'sample',
    isSubmit: false,
    errors: { name: false },
    complete: true,
    onClick: jest.fn(),
    isDefault: false,
  };

  const wrapper = mountWithIntl(
    <ExternalButton {...externalButtonProps} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('checks that the onClick function is called', () => {
    wrapper.find('button').simulate('click');
    expect(externalButtonProps.onClick).toHaveBeenCalled();
  });
});
