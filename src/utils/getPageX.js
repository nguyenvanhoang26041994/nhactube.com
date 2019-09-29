export default node => {
  let _nextNode = node;
  let pageX = 0;

  do {
    pageX += _nextNode.offsetLeft;
    _nextNode = _nextNode.offsetParent;
  } while(_nextNode.offsetParent)

  return pageX;
}
