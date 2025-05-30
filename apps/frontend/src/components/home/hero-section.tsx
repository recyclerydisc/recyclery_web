import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import headerPoster from '../../assets/images/home/header-poster.jpg';
import { BgImage } from '../generic/bg-image.tsx';
import { Button } from '../generic/buttons.tsx';
import { H1 } from '../generic/styled-tags.tsx';

function HeroSection() {
  const [imageURL, setImageURL] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch(`/images/1`)
      .then(res => res.json())
      .then(data => {
        if (data?.bucket_link) {
          setImageURL(data.bucket_link);
        } else {
          setImageURL(headerPoster);
        }
      })
      .catch(err => {
        console.error('image URL was not fetched correctly', err);
        setImageURL(headerPoster);
      });
  }, []);

  return (
    <BgImage image={imageURL} className="min-h-[32rem]">
      <H1>the recyclery</H1>
      <p className="text-body1 sm:text-heading2 pt-8 max-w-[56rem] font-brandon">
        The Recyclery Collective is an educational bike shop that promotes sustainability by giving
        access to tools, skills, and opportunities for collaboration.
      </p>
      <div className="flex sm:flex-row flex-col justify-center items-center gap-x-4 gap-y-2 pt-6">
        <Link to="https://therecyclery.us1.list-manage.com/subscribe?u=71e053371da882f0463a04165&id=6b561c7610">
          <Button color="orange">Join Our Newsletter</Button>
        </Link>
        <Link to="https://therecyclery.square.site/">
          <Button>Shop Our Bikes</Button>
        </Link>
      </div>
    </BgImage>
  );
}

export default HeroSection;
