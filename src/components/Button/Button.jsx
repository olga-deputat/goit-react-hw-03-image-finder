import { ButtonS } from './Button.styled';
export const Button = ({ onClick }) => {
  return (
    <ButtonS type="button" onClick={onClick}>
      Load more
    </ButtonS>
  );
};
