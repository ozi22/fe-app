import * as styledComponents from 'styled-components';
import colors from './constants/colors';
import fonts from './constants/fonts';
import { IColorsInterface } from './constants/colors.interface';
import { IFontsInterface } from './constants/fonts.interface';
import breakpoints from './constants/breakpoints';
import { IBreakpointsInterface } from './constants/breakpoints.interface';

export interface SC {
  className?: string;
  children?: any;
  style?: any;
}

export interface IThemeInterface {
  breakpoints: IBreakpointsInterface;
  colors: IColorsInterface;
  fonts: IFontsInterface;
}

export const theme: IThemeInterface = {
  breakpoints,
  colors,
  fonts
};

const {
  default: styled,
  createGlobalStyle,
  css,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeInterface>;

export default styled;
export { css, createGlobalStyle, ThemeProvider };
