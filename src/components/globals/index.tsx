import styled, { css, theme } from '../../styles/theme';

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

interface IContainer {
  fluid?: boolean;
}

export const Container = styled.div<IContainer>`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  ${({ fluid }) =>
    !fluid &&
    css`
      @media (min-width: ${theme.breakpoints.xs}px) {
        max-width: ${theme.breakpoints.xs}px;
      }

      @media (min-width: ${theme.breakpoints.sm}px) {
        max-width: ${theme.breakpoints.sm}px;
      }

      @media (min-width: ${theme.breakpoints.md}px) {
        max-width: ${theme.breakpoints.md}px;
      }

      @media (min-width: ${theme.breakpoints.lg}px) {
        max-width: ${theme.breakpoints.lg}px;
      }
    `}
`;

export const Button = styled.button`
  -webkit-appearance: none;
  display: inline-block;
  font-weight: 400;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid ${theme.colors.primary};
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  color: ${theme.colors.default};
  background-color: transparent;

  &:hover {
    text-decoration: none;
    outline: 0;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
  }

  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  margin: 18px 0;
`;
