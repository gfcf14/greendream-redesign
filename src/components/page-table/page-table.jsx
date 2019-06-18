import React from 'react';
import { Flex } from 'rebass';
import classNames from 'classnames';
import { HeaderCell, TableCell } from 'components';
import { urlPlayerIcon, whereforeTheHeckArtThouIcon } from 'images';
import './page-table.scss';

export function PageTable() {
  return (
    <Flex className="page-table-rct-component">
      <Flex className="page-table-rct-component__table-header">
        <HeaderCell cellTitle="NAME" />
        <HeaderCell cellTitle="LANGUAGE" />
        <HeaderCell cellTitle="PLAYS" />
      </Flex>
      <Flex className={classNames(
        'page-table-rct-component__table-row',
        'odd',
      )}
      >
        <TableCell cellText="Wherefore The Heck Art Thou?" icon={whereforeTheHeckArtThouIcon} />
        <TableCell cellText="JavaScript" />
        <TableCell cellText="52" />
      </Flex>
      <Flex className={classNames(
        'page-table-rct-component__table-row',
        'even',
        'last',
      )}
      >
        <TableCell cellText="URL Player" icon={urlPlayerIcon} />
        <TableCell cellText="JavaScript" />
        <TableCell cellText="31" />
      </Flex>
    </Flex>
  );
}

