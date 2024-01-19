import styled from 'styled-components';

export const SearchbarHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${({ theme }) => theme.spacing(16)};
  padding-right: ${({ theme }) => theme.spacing(6)};
  padding-left: ${({ theme }) => theme.spacing(6)};
  padding-top: ${({ theme }) => theme.spacing(3)};
  padding-bottom: ${({ theme }) => theme.spacing(3)};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accent};
  box-shadow: ${({ theme }) => theme.shadows.regular};
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.spacing(150)};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing(1)};
  overflow: hidden;
`;

export const SearchFormButton = styled.button.attrs(onSubmit => ({
  tabIndex: 0,
}))`
  display: inline-block;
  width: ${({ theme }) => theme.spacing(12)};
  height: ${({ theme }) => theme.spacing(12)};
  border: 0;
  background-image: url('https://cdn.icon-icons.com/icons2/1990/PNG/512/glassmagnifiermagnifyingsearchsearchingweb_123111.png');
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const SearchFormButtonLabel = styled.span`
  position: absolute;
  width: ${({ theme }) => theme.spacing(0.25)};
  height: ${({ theme }) => theme.spacing(0.25)};
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormInput = styled.input.attrs(onClick => ({
  tabIndex: 0,
}))`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${({ theme }) => theme.spacing(5)};
  border: none;
  outline: none;
  padding: 0 10px;

  &::placeholder {
    font: inherit;
    font-size: ${({ theme }) => theme.spacing(5)};
  }
`;
