export default function orderByProps(obj, arr) {
  const sorted = [];
  const notSorted = [];

  arr.forEach(
    (value) => (Object.prototype.hasOwnProperty.call(obj, value)
      ? sorted.push({ [value]: obj[value] })
      : false),
  );

  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      if (!sorted.find((elem) => Object.prototype.hasOwnProperty.call(elem, prop))) {
        notSorted.push(prop);
      }
    }
  }
  notSorted.sort().forEach((item) => sorted.push({ [item]: obj[item] }));

  return sorted;
}
