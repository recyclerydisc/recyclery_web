import { useEffect, useState } from 'react';
import headerImage from '../../../assets/images/support-us/donate-time/donate-time-header.jpg';
import volunteerFun from '../../../assets/images/support-us/donate-time/volunteer-fun.jpg';
import { EditLink } from '../../../components/generic/EditLink.tsx';
import HeroSection from '../../../components/support-us/donate-time/hero-section.tsx';
import Roles from '../../../components/support-us/donate-time/roles.tsx';
import VolunteerMission from '../../../components/support-us/donate-time/volunteer-mission.tsx';
import { useUser } from '../../../hooks/useUser.tsx';

function DonateTime() {
  const [heroImageURL, setHeroImageURL] = useState<string | undefined>(undefined);
  const [volunteerImageURL, setVolunteerImageURL] = useState<string | undefined>(undefined);
  const { isAuthenticated } = useUser();

  useEffect(() => {
    fetch(`/images/15`)
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

  useEffect(() => {
    fetch(`/images/16`)
      .then(res => res.json())
      .then(data => {
        if (data?.bucket_link) {
          setVolunteerImageURL(data.bucket_link);
        } else {
          setVolunteerImageURL(volunteerFun);
        }
      })
      .catch(err => {
        console.error('image URL was not fetched correctly', err);
        setVolunteerImageURL(volunteerFun);
      });
  }, []);

  return (
    <>
      <title>Become a Volunteer - The Recyclery</title>
      <HeroSection image={heroImageURL} />
      {isAuthenticated && <EditLink id="15"></EditLink>}
      <VolunteerMission image={volunteerImageURL} />
      <Roles />
    </>
  );
}

export default DonateTime;
