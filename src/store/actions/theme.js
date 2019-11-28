import { themesMode } from '../constants';
import { themeSelector } from '../selectors';

export const toggleTheme = () => (dispatch, getState) => {
  const currentTheme = themeSelector(getState());

  if (currentTheme === themesMode.LIGHT) {
    return dispatch({ type: themesMode.DARK });
  }

  return dispatch({ type: themesMode.LIGHT });
};

export const changeToDark = () => ({
  type: themesMode.DARK
});

export const changeToLight = () => ({
  type: themesMode.LIGHT
});
