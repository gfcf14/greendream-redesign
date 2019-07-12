import React, { useEffect, useState } from 'react';
import { Flex, Image, Link } from 'rebass';
import { getImageSource, getTable, injectItemKey } from 'utils/helpers';
import './sites-table.scss';

function renderSites(tableData) {
  return tableData.map(injectItemKey).map((site) => {
    const { name, key, url } = site;

    return (
      <Flex key={key} className="sites-table-rct-component__site">
        <Link className="site-link" href={url}>
          <Image
            src={getImageSource(name)}
            className="site-image"
            alt="site-image"
            title={name}
          />
        </Link>
      </Flex>
    );
  });
}

export function SitesTable() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const getFirst = () => {
      getTable('Sites', 'order by id asc', setTableData);
    };

    getFirst();
  }, []);

  return (
    <Flex as="section" className="sites-table-rct-component">
      {renderSites(tableData)}
    </Flex>
  );
}

