import styled, { theme } from '../../styles/theme';
import { rem } from 'polished';

export const Nav = styled.nav`
  background-color: ${theme.colors.lightGray};
  padding: ${rem('15px')} 0;
  border-bottom: 1px solid ${theme.colors.grey};
`;

export const SelectWrap = styled.div`
  margin-left: auto;
  min-width: 100px;
`;
