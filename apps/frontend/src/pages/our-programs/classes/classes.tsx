import { useEffect, useState } from 'react';
import ClassDescription from '../../../components/classes/class-description';
import ClassHero from '../../../components/classes/class-hero';
import ClassSignup from '../../../components/classes/class-signup';
import headerImage from '../../../components/classes/header-image.png';
function Classes() {
  const [heroimageURL, setHeroImageURL] = useState<string | undefined>(undefined);

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
    <div>
      {/* again I'm going to have to pass in an image from supabase here */}
      <ClassHero />
      <ClassDescription />
      <ClassSignup />
    </div>
  );
}

export default Classes;
