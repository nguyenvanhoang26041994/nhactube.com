export default (array, predicate) => {
  if (!array || !array.length || !array.findIndex) {
    return -1;
  }

  return array.findIndex(predicate);
}
