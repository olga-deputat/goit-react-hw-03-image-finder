import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryS } from './ImageGallery.styled';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <ImageGalleryS>
      {images.map((image, index) => (
        <ImageGalleryItem
          key={index + 1}
          content={image}
          openModal={openModal}
        />
      ))}
    </ImageGalleryS>
  );
};
