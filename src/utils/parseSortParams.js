import { SORT_ORDER } from '../constants/index.js';

const parseSortBy = (value) => {
  if (typeof value !== 'string') return '_id';

  const keys = ['name'];

  if (keys.includes(value)) return value;

  return '_id';
};

const parseSortOrder = (value) => {
  const isKnownOrder = [SORT_ORDER.ASC, SORT_ORDER.DESC].includes(value);
  if (isKnownOrder) return value;
  return SORT_ORDER.ASC;
};

export const parseSortParams = (query) => {
  const { sortBy, sortOrder } = query;

  const parsedSortBy = parseSortBy(sortBy);
  const parsedSortOrder = parseSortOrder(sortOrder);

  return {
    sortBy: parsedSortBy,
    sortOrder: parsedSortOrder,
  };
};
