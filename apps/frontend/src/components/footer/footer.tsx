import { Bike } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./icons";

export default function Footer() {
  return (
    <div className="p-9 flex flex-col gap-6 bg-darkblue-800 text-white">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <div className='flex justify-start items-center gap-2'>
          <Bike className='size-10'/>
          <span className='text-[28px] text-nowrap font-bold'>the recyclery</span>
        </div>
        <div className="space-x-4">
          <button className='bg-orange-500 hover:bg-orange-700 px-3 py-2 rounded-2xl text-white text-body2 cursor-pointer transition-colors'>Donate</button>
          <button className='bg-orange-500 hover:bg-orange-700 px-3 py-2 rounded-2xl text-white text-body2 cursor-pointer transition-colors'>Join Our Newsletter</button>
        </div>
      </div>
      <div className='border-[1px] border-white/10'/>
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
        <div>
          <p className="font-bold">Let's stay in touch!</p>
          <p>Have a question? Please feel free to visit us in-person or contact us via phone or email.</p>
        </div>
        <div>
          <p><span className="font-bold">Phone:</span> 773-262-5900</p>
          <p><span className="font-bold">Email:</span> info@therecyclery.org</p>
          <p><span className="font-bold">Address:</span> 7628 N Paulina St. 60626 Chicago, IL</p>
        </div>
      </div>
      <div className='border-[1px] border-white/10'/>
      <div className="flex justify-between items-center">
        <p>© Copyright 2025 The Recyclery Collective. All rights reserved.</p>
        <div className="flex gap-4">
          <FacebookIcon className="size-8" />
          <InstagramIcon className="size-8" />
        </div>
      </div>
    </div>
  )
}
