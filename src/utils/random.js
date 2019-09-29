export default (lower, upper) => {
  if (typeof lower !== 'number' || typeof upper !== 'number') {
    return 0;
  }

  return lower + Math.round((upper - lower) * Math.random());
};
