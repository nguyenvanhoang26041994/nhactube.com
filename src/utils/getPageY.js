export default node => {
  let _nextNode = node;
  let pageY = 0;

  do {
    pageY += _nextNode.offsetTop;
    _nextNode = _nextNode.offsetParent;
  } while(_nextNode.offsetParent)

  return pageY;
}
