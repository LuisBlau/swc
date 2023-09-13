import Text from '../typography/Text';
import styled from 'styled-components';

export const TableInfoWrapper = styled.div`
  background-color: #282215;
  color: #fffefc;
  border-radius: 1rem;
  padding: 1rem 1rem;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);

  ${Text} {
    margin-bottom: 0;
  }
`;