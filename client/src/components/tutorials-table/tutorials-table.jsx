import React, { useEffect, useState } from 'react';
import { Flex, Image, Link } from 'rebass';
import classNames from 'classnames';
import { TUTORIAL_TABLE_MESSAGES } from 'utils/constants';
import { getImageSource, getTable, injectItemKey } from 'utils/helpers';
import './tutorials-table.scss';

function renderTutorials(tableData) {
  return tableData.map(injectItemKey).map((tutorial, i) => {
    const { language, key, name } = tutorial;

    return (
      <Link
        className={classNames(
          'tutorials-table-rct-component__tutorial-block',
          i % 2 === 0 ? 'left' : 'right',
        )}
        key={key}
        href={`${process.env.PUBLIC_URL}/tutorials/${language}`}
      >
        <Flex className="tutorial-text">
          <h3>{name}</h3>
          <p>{TUTORIAL_TABLE_MESSAGES[`${language}`]}</p>
        </Flex>
        <Flex className="tutorial-logo">
          <Image
            src={getImageSource(name)}
            className="logo-image"
            alt={`${name}-logo-white`}
          />
        </Flex>
      </Link>
    );
  });
}

export function TutorialsTable() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const getFirst = () => {
      getTable('Tutorials', 'order by id asc', setTableData);
    };

    getFirst();
  }, []);

  return (
    <Flex className="tutorials-table-rct-component">
      {renderTutorials(tableData)}
    </Flex>
  );
}

