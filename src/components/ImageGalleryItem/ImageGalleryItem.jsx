import {
  ImageGalleryItemS,
  ImageGalleryItemImageS,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ content, openModal }) => {
  const { webformatURL, largeImageURL, tags } = content;
  return (
    <ImageGalleryItemS onClick={() => openModal(largeImageURL)}>
      <ImageGalleryItemImageS src={webformatURL} alt={tags} />
    </ImageGalleryItemS>
  );
};
