import { rem } from 'polished';
import { IFontsInterface } from './fonts.interface';

const fonts: IFontsInterface = {
  family: {
    base: 'Sans-serif',
    emphasized: 'Sans-serif',
    secondary: 'Helvetica Neue'
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700
  },
  size: {
    base: rem('14px'),
    small: rem('11px'),
    medium: rem('16px'),
    big: rem('22px'),

    h1: rem('70px'),
    h2: rem('48px'),
    h3: rem('36px'),
    h4: rem('24px'),
    h5: rem('20px'),
    h6: rem('12px')
  },
  lineHeight: {
    base: rem('14px'),
    small: rem('11px'),
    medium: rem('16px'),
    big: rem('22px'),

    h1: rem('72px'),
    h2: rem('50px'),
    h3: rem('28px'),
    h4: rem('26px'),
    h5: rem('22px')
  }
};

export default fonts;
