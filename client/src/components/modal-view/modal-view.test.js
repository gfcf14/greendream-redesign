import React from 'react';
import { ModalView } from 'components';

describe('ModalView Component Unit Test', () => {
  const modalViewProps = {
    fadeOut: jest.fn(),
    modal: 3,
    title: 'sample',
    type: 'featured',
  };

  const wrapper = mountWithIntl(
    <ModalView {...modalViewProps} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('checks that the fadeOut function is successfully called', () => {
    wrapper.find('div.close-button').simulate('click');

    expect(modalViewProps.fadeOut).toHaveBeenCalled();
  });

  it('checks that the modal class exists', () => {
    expect(wrapper.find('section.modal-view-rct-component').hasClass('modal')).toBe(true);
  });

  it('checks that the title is correctly rendered', () => {
    const modalViewTitle = 'div.modal-view-rct-component__title-bar p.title-text';

    expect(wrapper.find(modalViewTitle).text()).toEqual(modalViewProps.title);
  });

  it('checks for content correctly rendered based on type', () => {
    expect(wrapper.find('a.featured-block-rct-component')).toHaveLength(3);
  });
});
