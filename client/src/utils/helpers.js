import shortid from 'shortid';

export function injectItemKey(itemObject) {
  return { ...itemObject, key: shortid.generate() };
}

