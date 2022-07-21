/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { DefaultTheme } from 'styled-components';
import cosmicTheme from './cosmic';
import corporateTheme from './corporate';
import darkTheme from './dark';
import defaultTheme from './default';
import mapping from './mapping';
import { ThemeObject, ThemeKeys, ThemeKey } from './themeTypes';

export { ThemeObject, ThemeKeys, ThemeKey, mapping };

export const themes = {
  default: defaultTheme,
  cosmic: cosmicTheme,
  corporate: corporateTheme,
  dark: darkTheme,
};

function getKeyValue(settings: any, key: any): any {
  if (settings[key] in settings) {
    return getKeyValue(settings, settings[key]);
  }
  return settings[key];
}

function getThemeValue(settings: any) {
  Object.keys(settings).forEach((key) => {
    settings[key] = getKeyValue(settings, key);
  });
  return settings;
}

export function createTheme(name: keyof typeof themes, settings: Partial<DefaultTheme> = {}): DefaultTheme {
  switch (name) {
    case 'cosmic':
      return {
        name,
        dir: 'ltr',
        ...getThemeValue({
          ...defaultTheme,
          ...mapping,
          ...themes['dark'],
          ...themes[name],
          ...settings,
        }),
      };
    case 'corporate':
    case 'dark':
      return {
        name,
        dir: 'ltr',
        ...getThemeValue({
          ...defaultTheme,
          ...mapping,
          ...themes[name],
          ...settings,
        }),
      };
    default:
      return {
        name,
        dir: 'ltr',
        ...getThemeValue({ ...defaultTheme, ...mapping, ...settings }),
      };
  }
}
