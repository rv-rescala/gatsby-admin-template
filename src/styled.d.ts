import 'styled-components';
import { ThemeObject } from '@paljs/theme';
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeObject {
    name: 'cosmic' | 'corporate' | 'dark' | 'default';
    dir: 'ltr';
    sidebarHeaderGap: string;
    gridSize: number;
  }
}
