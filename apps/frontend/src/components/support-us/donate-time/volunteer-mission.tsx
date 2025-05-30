import { Link } from 'react-router-dom';
import { EditLink } from '../../generic/edit-image-button.js';
import { useUser } from '../../../hooks/useUser.tsx';
import { Button } from '../../generic/buttons.tsx';
import { H2, Section } from '../../generic/styled-tags.tsx';

function VolunteerMission({ image }: { image?: string }) {
  const { isAuthenticated } = useUser();

  return (
    <Section className="lg:grid lg:grid-cols-2 gap-24 items-center justify-items-center" tan>
      <div>
        <H2>volunteers and our mission</H2>
        <p className="font-brandon mb-4">
          Recyclery volunteers are the people power that allow our bicycle related programs to move
          forward. As Freecyclery Mechanics, they work on discarded bicycles to turn them into
          sustainable transportation for those in need. Our most experienced volunteers and staff
          take responsibility in sharing their skills and expertise with our learning volunteers
          during Volunteer Hours.
        </p>
        <p className="font-brandon mb-4">
          Our Open Shop program is also run by volunteers, helping community members work on their
          own bicycles. We are always looking for friendly volunteers to welcome our patrons into
          Open Shop. We have committees of volunteers to make well informed decisions about our
          marketing, resource development, technical needs, and events & outreach. The collaboration
          of our volunteers with one another and the community is what makes a lasting difference
          for our larger community. We depend on a diverse set of volunteer skills and interests to
          move our programs ahead and allow them to thrive.
        </p>
        <p className="font-brandon mb-6">
          We are thankful to our volunteers who transform lives by embodying our mission. Their hard
          work and dedication will make a difference in our neighborhood and the lives of those we
          serve and support.
        </p>
        <Button>
          <Link to="https://www.volgistics.com/appform/1124825310">Join the Recyclery Today!</Link>
        </Button>
      </div>
      <div>
        <img
          src={image}
          alt="a volunteer helping someone fix a bike"
          className="rounded-xl w-72 lg:w-96 mt-16 lg:mt-0"
        />
        {isAuthenticated && <EditLink id="16"></EditLink>}
      </div>
    </Section>
  );
}

export default VolunteerMission;
