import { H2, Section } from '../../generic/styled-tags.tsx';

export default function Partners() {
  const allImages = import.meta.glob(
    '../../../assets/images/our-programs/freecyclery/partners/*.png'
  );
  const images = Object.keys(allImages).map(path => {
    const imagePath = path.replace('../../../', '/src/');
    return {
      src: imagePath,
      alt: path.split('/').pop()?.split('.')[0] || '',
    };
  });

  return (
    <Section id="partners" className="flex flex-col items-center text-center">
      <H2>freecyclery partners</H2>
      <div className="flex justify-center flex-wrap gap-x-12 gap-y-2 max-w-[72rem]">
        {images.map(image => (
          <img
            src={image.src}
            alt={image.alt}
            key={image.alt}
            className="max-h-28 object-contain"
          />
        ))}
      </div>
    </Section>
  );
}
