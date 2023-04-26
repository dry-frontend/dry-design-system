import 'styled-components';
import { theme } from 'styles/theme';

type ThemeConfig = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeConfig {}
}
