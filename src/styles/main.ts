import { css, theme } from './theme';
import normalize from './global-css/normalize';
import text from './global-css/text';

const dimensions = ['xs', 'sm', 'md', 'lg'] as const;

const main = css`
  * {
    outline: none;
    box-sizing: border-box;
  }

  *::after,
  *::before {
    box-sizing: border-box;
  }

  ${normalize}

  html, body {
    font-family: ${theme.fonts.family.base};
    background-color: ${theme.colors.background};
  }

  #nprogress > .bar {
    background: ${theme.colors.primary};
  }

  ${text}
`;

export default main;
