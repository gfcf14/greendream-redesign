import React from 'react';
import { ProfilePage } from 'components';
import { MESSAGES } from 'utils/messages';

describe('ProfilePage Component Unit Test', () => {
  const wrapper = mountWithIntl(
    <ProfilePage />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the appropriate text based on username provided', () => {
    const unspecifiedSpan = wrapper.find('.profile-page-rct-component__unspecified');

    expect(unspecifiedSpan.exists()).toBe(true);
    expect(unspecifiedSpan.text()).toEqual(MESSAGES.PROFILE_UNSPECIFIED);
  });
});
