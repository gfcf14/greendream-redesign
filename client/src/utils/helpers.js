import axios from 'axios';
import shortid from 'shortid';

export function injectItemKey(itemObject) {
  return { ...itemObject, key: shortid.generate() };
}

export function getTable(tableName, tableOrder, setTableData) {
  axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/table`, {
    params: {
      tableName,
      tableOrder,
    },
  }).then((response) => {
    setTableData(response.data);
  });
}

