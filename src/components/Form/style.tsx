import styled, { theme } from '../../styles/theme';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  label {
    font-weight: bold;
  }

  input,
  textarea {
    padding: 8px;
    margin: 8px 0;
    box-shadow: 0 6px 8px rgba(102, 119, 136, 0.03), 0 1px 2px rgba(102, 119, 136, 0.3);
    border: none;
    width: 100%;

    &:disabled {
      background-color: ${theme.colors.lightGray};
    }
  }

  textarea {
    resize: vertical;
  }

  .hasError {
    background-color: #fbd7d7;
  }
`;
