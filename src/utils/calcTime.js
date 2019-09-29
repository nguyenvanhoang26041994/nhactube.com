export default secondTime => {
  if (typeof secondTime !== 'number') {
    return '';
  }
  let _secondTime = secondTime;
  const hours = Math.floor(_secondTime / 3600);
  _secondTime = _secondTime - 3600 * hours;
  const minues = Math.floor(_secondTime / 60);
  _secondTime = _secondTime - 60 * minues;
  const seconds = Math.floor(_secondTime);

  let firstStr = '';
  let secondStr = '';
  let lastStr = '';

  if (hours && hours < 10) {
    firstStr = `0${hours}:`;
  } else if (hours && hours >= 10) {
    firstStr = `${hours}:`;
  } else {
    // DO NOTHING
  }

  if (minues <= 9) {
    secondStr = `0${minues}:`;
  } else {
    secondStr = `${minues}:`;
  }

  if (seconds <= 9) {
    lastStr = `0${seconds}`;
  } else {
    lastStr = `${seconds}`;
  }

  return `${firstStr}${secondStr}${lastStr}`;
}
