import styled from 'styled-components';

export const ButtonS = styled.button.attrs(onClick => ({ tabIndex: 0 }))`
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.spacing(0.75)};
  background-color: ${({ theme }) => theme.colors.yellow};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: ${({ theme }) => theme.colors.dark};
  border: ${({ theme }) => theme.spacing(1)} solid
    ${({ theme }) => theme.colors.light};
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: ${({ theme }) => theme.spacing(4.5)};
  line-height: ${({ theme }) => theme.spacing(6)};
  font-style: normal;
  font-weight: 500;
  min-width: ${({ theme }) => theme.spacing(45)};
  box-shadow: ${({ theme }) => theme.shadows.regular};
  margin: 0 auto;

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};
  }
`;
