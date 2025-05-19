import { useEffect, useState } from 'react';
import headerImage from '../../../assets/images/our-programs/classes/header-image.png';
import ClassDescription from '../../../components/our-programs/classes/class-description';
import ClassHero from '../../../components/our-programs/classes/class-hero';
import ClassSignup from '../../../components/our-programs/classes/class-signup';

function Classes() {
  const [heroImageURL, setHeroImageURL] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch(`/images/7`)
      .then(res => res.json())
      .then(data => {
        if (data?.bucket_link) {
          setHeroImageURL(data.bucket_link);
        } else {
          setHeroImageURL(headerImage);
        }
      })
      .catch(err => {
        console.error('image URL was not fetched correctly', err);
        setHeroImageURL(headerImage);
      });
  }, []);

  return (
    <main>
      <title>Classes - The Recyclery</title>
      <ClassHero heroimageURL={heroImageURL} />
      <ClassDescription />
      <ClassSignup />
    </main>
  );
}

export default Classes;
