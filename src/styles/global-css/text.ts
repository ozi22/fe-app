import { css, theme } from '../theme';

const text = css`
  h1,
  .as-h1 {
    font-size: ${theme.fonts.size.h1};
    line-height: ${theme.fonts.lineHeight.h1};
  }

  h2,
  .as-h2 {
    font-size: ${theme.fonts.size.h2};
    line-height: ${theme.fonts.lineHeight.h2};
  }

  h3,
  .as-h3 {
    font-size: ${theme.fonts.size.h3};
    line-height: ${theme.fonts.lineHeight.h3};
  }

  h4,
  .as-h4 {
    font-size: ${theme.fonts.size.h4};
    line-height: ${theme.fonts.lineHeight.h4};
  }

  h5,
  .as-h5 {
    font-size: ${theme.fonts.size.h5};
    line-height: ${theme.fonts.lineHeight.h5};
    font-weight: ${theme.fonts.weight.bold};
  }

  p {
    font-size: ${theme.fonts.size.base};
    line-height: ${theme.fonts.lineHeight.base};
  }

  b,
  strong {
    font-weight: ${theme.fonts.weight.bold};
  }

  .text-regular {
    font-weight: ${theme.fonts.weight.regular};
  }

  .text-bold {
    font-weight: ${theme.fonts.weight.bold};
  }

  .text-small {
    font-size: ${theme.fonts.size.small};
    line-height: ${theme.fonts.lineHeight.small};
  }

  .text-medium {
    font-size: ${theme.fonts.size.medium};
    line-height: ${theme.fonts.lineHeight.medium};
  }

  .text-big {
    font-size: ${theme.fonts.size.big};
    line-height: ${theme.fonts.lineHeight.big};
  }

  .text-italic {
    font-style: italic;
  }
`;

export default text;
