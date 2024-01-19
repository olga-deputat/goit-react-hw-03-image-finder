import styled from 'styled-components';

export const ImageGalleryItemS = styled.li`
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  box-shadow: ${({ theme }) => theme.shadows.regular};
`;

export const ImageGalleryItemImageS = styled.img.attrs(onClick => ({
  tabIndex: 0,
}))`
  width: 100%;
  height: ${({ theme }) => theme.spacing(65)};
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
