import React, { useEffect, useState } from 'react';
import { Flex, Image } from 'rebass';
import classNames from 'classnames';
import { getTable, injectItemKey } from 'utils/helpers';
import {
  CPlusPlusWhiteLogo,
  CSharpWhiteLogo,
  HTML5WhiteLogo,
  JavaWhiteLogo,
  VBDotNetWhiteLogo,
} from 'images/logos';
import './tutorials-table.scss';

function getImageSource(name) {
  switch (name) {
    case 'C++': {
      return CPlusPlusWhiteLogo;
    }
    case 'C#': {
      return CSharpWhiteLogo;
    }
    case 'HTML': {
      return HTML5WhiteLogo;
    }
    case 'Java': {
      return JavaWhiteLogo;
    }
    case 'VB.NET': {
      return VBDotNetWhiteLogo;
    }
    default: {
      return 'no-image';
    }
  }
}

function renderTutorials(tableData) {
  return tableData.map(injectItemKey).map((tutorial, i) => {
    const { description, key, name } = tutorial;

    return (
      <Flex
        className={classNames(
          'tutorials-table-rct-component__tutorial-block',
          i % 2 === 0 ? 'left' : 'right',
        )}
        key={key}
      >
        <Flex className="tutorial-text">
          <h3>{name}</h3>
          <p>{description}</p>
        </Flex>
        <Flex className="tutorial-logo">
          <Image
            src={getImageSource(name)}
            className="logo-image"
            alt={`${name}-logo-white`}
          />
        </Flex>
      </Flex>
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

