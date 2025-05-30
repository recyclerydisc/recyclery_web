import { Bike } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../generic/buttons.tsx';
import { FacebookIcon, InstagramIcon } from '../icons/icons.tsx';

export default function Footer() {
  return (
    <div className="p-8 flex flex-col gap-4 bg-darkblue-800 text-white">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <div className="flex justify-start items-center gap-2">
          <Bike className="size-8" />
          <p className="text-heading2 text-nowrap font-roc">the recyclery</p>
        </div>
        <div className="flex flex-col xs:flex-row gap-4">
          <Link to="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=97B48AH3ZT92G">
            <Button color="orange">Donate</Button>
          </Link>
          <Link to="https://therecyclery.us1.list-manage.com/subscribe?u=71e053371da882f0463a04165&id=6b561c7610">
            <Button color="orange">Join Our Newsletter</Button>
          </Link>
        </div>
      </div>
      <div className="border-[1px] border-white/10" />
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
        <div>
          <p className="font-roc text-subheading2">Let's stay in touch!</p>
          <p className="font-brandon">
            Have a question? Please feel free to visit us in-person or contact us via phone or
            email.
          </p>
        </div>
        <div>
          <p className="font-brandon">
            Phone:{' '}
            <Link to="tel:+17732625900" className="hover:underline">
              773-262-5900
            </Link>
          </p>
          <p className="font-brandon">
            <b>Email:</b>{' '}
            <Link to="mailto:info@therecyclery.org" className="hover:underline">
              info@therecyclery.org
            </Link>
          </p>
          <p className="font-brandon">
            <b>Address:</b>{' '}
            <Link to="https://maps.app.goo.gl/6Hr9cgBtuzdNBWL28" className="hover:underline">
              7628 N Paulina St. 60626 Chicago, IL
            </Link>
          </p>
        </div>
      </div>
      <div className="border-[1px] border-white/10" />
      <div className="flex justify-between items-center">
        <p className="font-brandon text-body2">
          © Copyright 2025{' '}
          <Link to="/" className="hover:underline" onClick={() => window.scrollTo(0, 0)}>
            The Recyclery Collective
          </Link>
          . All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link
            to="https://www.facebook.com/TheRecyclery"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon className="size-6" />
          </Link>
          <Link to="https://instagram.com/therecyclery/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="size-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
