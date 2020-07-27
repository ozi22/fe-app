import { css } from '../theme';
import breakpoints from '../constants/breakpoints';

export type Resolution = 'xs' | 'sm' | 'md' | 'lg';

const query = (label: Resolution) => (...args: any) => css`
  @media (min-width: ${breakpoints[label as Resolution]}px) {
    ${css(args)};
  }
`;

export const media = Object.keys(breakpoints).reduce((acc: any, label: string) => {
  acc[label] = query(label as Resolution);
  return acc;
}, {});

export default media;
