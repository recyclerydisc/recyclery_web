import { H2 } from '../../generic/styled-tags';
import React from 'react';

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
    <section className="bg-background px-8 md:px-16 py-16 flex flex-col items-center text-center">
      <H2>freecyclery partners</H2>
      <div className="flex justify-center flex-wrap gap-x-12 gap-y-2 mt-8 max-w-[72rem]">
        {images.map(image => (
          <img src={image.src} alt={image.alt} className="max-h-28 object-contain" />
        ))}
      </div>
    </section>
  );
}
