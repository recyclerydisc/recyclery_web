import { Link } from 'react-router-dom';

export default function ImageGallery({ images }: { images: { id: string; url: string }[] }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image) => (
        <Link to={`/upload/${image.id}`} key={image.id}>
          <img
            src={image.url}
            alt={`Image ${image.id}`}
            className="w-full h-auto cursor-pointer"
          />
        </Link>
      ))}
    </div>
  );
}