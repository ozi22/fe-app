import styled, { css } from '../../styles/theme';
import { IconProps } from './index';

export const IconWrapper = styled.div<IconProps>`
  display: inline-block;
  height: ${({ height }) => height || 20}px;

  &:not(:last-of-type) {
    margin-right: 10px;
  }

  svg {
    height: ${({ height }) => height || 20}px;
    width: ${({ width }) => width || 20}px;

    ${({ color }) => css`
      *[fill] {
        fill: ${color};
      }
      *[stroke] {
        stroke: ${color};
      }
    `}
  }
`;
