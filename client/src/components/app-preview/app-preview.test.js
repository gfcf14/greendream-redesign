import React from 'react';
import { AppPreview } from 'components';
import { MESSAGES } from 'utils/messages';

describe('AppPreview Component Unit Test', () => {
  const appPreviewProps = {
    rowName: 'urlplayer',
    rowTitle: 'URL PLAYER',
    tableName: 'Programs',
  };

  const wrapper = mountWithIntl(
    <AppPreview {...appPreviewProps} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('checks that the description message is correct', () => {
    expect(wrapper.find('span.app-preview-rct-component__app-description').text()).toEqual(MESSAGES.URL_PLAYER);
  });
});
