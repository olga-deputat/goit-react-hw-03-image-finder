import styled from 'styled-components';

export const NotificationWrapper = styled.div`
  height: 80vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotificationText = styled.p`
  font-size: ${({ theme }) => theme.spacing(8)};
  font-weight: 500;
  color: rgb(213, 85, 85);
  text-align: center;
  max-width: ${({ theme }) => theme.spacing(125)};
`;
