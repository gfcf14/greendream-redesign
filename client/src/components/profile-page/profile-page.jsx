import React, { useEffect, useState } from 'react';
import { Flex, Image } from 'rebass';
import queryString from 'query-string';
import { OBJECTIVE_PRONOUNS } from 'utils/constants';
import { getRow, getImageFromBuffer } from 'utils/helpers';
import { MESSAGES } from 'utils/messages';
import './profile-page.scss';

function renderUnspecified() {
  return (
    <span className="profile-page-rct-component__unspecified">
      {MESSAGES.PROFILE_UNSPECIFIED}
    </span>
  );
}

function renderIfUserNameGiven(userName, userData) {
  if (userName === 'unspecified') {
    return renderUnspecified();
  }

  if (userName) {
    if (userData.length === 0) {
      return renderUnspecified();
    }

    const {
      about,
      img,
      name,
      sex,
      username,
    } = userData[0];

    return (
      <Flex className="profile-page-rct-component__profile-container">
        <Image
          className="profile-image"
          src={getImageFromBuffer(img)}
          alt="profile-image"
        />
        <Flex className="profile-info">
          <Flex className="username">
            {`${username.toUpperCase()}  (${name.toUpperCase()})`}
          </Flex>
          <Flex className="info-container">
            <Flex className="about">
              <span className="about-title">
                {`${MESSAGES.PROFILE_ABOUT} ${OBJECTIVE_PRONOUNS[`${sex}`]}:`}
              </span>
              <span className="about-description">
                {about}
              </span>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  }

  return null;
}

export function ProfilePage() {
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const pageParams = window.location.href;
    const parsedQueries = queryString.parse(pageParams.split('?')[1]);

    setUserName(parsedQueries['user'] || 'unspecified');
    getRow(parsedQueries['user'], 'Users', 'username', setUserData);
  }, []);

  return (
    <Flex className="profile-page-rct-component">
      {renderIfUserNameGiven(userName, userData)}
    </Flex>
  );
}

