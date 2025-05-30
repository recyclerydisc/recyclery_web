import { useEffect, useState } from 'react';
import headerImage from '../../../assets/images/our-programs/classes/header-image.png';
import { EditLink } from '../../../components/generic/edit-image-button.tsx';
import ClassDescription from '../../../components/our-programs/classes/class-description.tsx';
import ClassHero from '../../../components/our-programs/classes/class-hero.tsx';
import ClassSignup from '../../../components/our-programs/classes/class-signup.tsx';
import { useUser } from '../../../hooks/useUser.tsx';

function Classes() {
  const [heroImageURL, setHeroImageURL] = useState<string | undefined>(undefined);
  const { isAuthenticated } = useUser();

  useEffect(() => {
    fetch(`/images/10`)
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
      {isAuthenticated && <EditLink id="10"></EditLink>}
      <ClassDescription />
      <ClassSignup />
    </main>
  );
}

export default Classes;
