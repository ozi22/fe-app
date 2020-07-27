import styled, { theme } from '../../styles/theme';

export const Table = styled.table`
  border-collapse: collapse;
  border-radius: 2px;
  background: ${theme.colors.white};
  box-shadow: 0 6px 8px rgba(102, 119, 136, 0.03), 0 1px 2px rgba(102, 119, 136, 0.3);
  padding: 16px;
  width: 100%;

  > thead {
    > tr {
      > th {
        padding: 16px;
        text-align: start;
        border-bottom: 2px solid ${theme.colors.background};
      }
    }
  }

  > tbody {
    > tr {
      > td {
        padding: 16px;
        border-bottom: 2px solid ${theme.colors.background};
      }
    }
  }
`;
