import { Bike } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon } from '../icons/icons';
import { OrangeButtonLink } from '../generic/buttons';

export default function Footer() {
  return (
    <div className="p-8 flex flex-col gap-4 bg-darkblue-800 text-white">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <div className="flex justify-start items-center gap-2">
          <Bike className="size-8" />
          <p className="text-heading2 text-nowrap font-roc">the recyclery</p>
        </div>
        <div className="space-x-4">
          <OrangeButtonLink
            to={
              'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=97B48AH3ZT92G'
            }
          >
            Donate
          </OrangeButtonLink>
          <OrangeButtonLink to={'#'}>Join Our Newsletter</OrangeButtonLink>
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
          <p className="font-brandon">Phone: 773-262-5900</p>
          <p className="font-brandon">
            <b>Email:</b> info@therecyclery.org
          </p>
          <p className="font-brandon">
            <b>Address:</b> 7628 N Paulina St. 60626 Chicago, IL
          </p>
        </div>
      </div>
      <div className="border-[1px] border-white/10" />
      <div className="flex justify-between items-center">
        <p className="font-brandon text-body2">
          © Copyright 2025{' '}
          <Link to="/" className="hover:underline">
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
