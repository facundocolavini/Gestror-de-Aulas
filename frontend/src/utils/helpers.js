export const convertArrayToObjectIdValue = (array, key, value) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    console.log(item[value])
    return {
      ...obj,
      [item[key]]: item[value],
    };
  }, initialValue);
};

export const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};

export const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1},
    (_, i) => start + (i * step));
