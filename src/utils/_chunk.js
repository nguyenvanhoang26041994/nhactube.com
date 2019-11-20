export default (array, size) => {
  const rs = [];
  for (let i = 0; i < array.length; i += size) {
    rs.push(array.slice(i, i + size));
  }

  return rs;
};
