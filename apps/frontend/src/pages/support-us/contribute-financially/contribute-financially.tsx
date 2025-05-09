import { useState } from "react";
import { BlueButton, OrangeButtonLink } from "../../../components/generic/buttons";
import { H2, H3, Section } from "../../../components/generic/styled-tags";

export default function ContributeFinancially() {
  const [currentTab, setCurrentTab] = useState("50");


  return (
    <Section>
      <H2>contribute financially</H2>
      <div className="flex flex-col md:flex-row justify-center items-start gap-8">
        <div className="w-full flex flex-col justify-start items-center flex-3/7">
          <div className=" w-full">
            <p className="font-brandon mb-4">Click to see what your donation amount directly correlates to in our programs.</p>
          </div>
          <div className="w-full grid grid-rows-2 grid-cols-2 gap-3 md:mb-8">
            <BlueButton onClick={() => setCurrentTab("50")}>$50</BlueButton>
            <BlueButton onClick={() => setCurrentTab("200")}>$200</BlueButton>
            <BlueButton onClick={() => setCurrentTab("500")}>$500</BlueButton>
            <BlueButton onClick={() => setCurrentTab("800")}>$800</BlueButton>
          </div>
          <div className="w-full hidden md:block">
            <H3 className="mb-4">ready to donate?</H3>
            <p className="font-brandon mb-4">We greatly appreciate and welcome any donation amount!</p>
            <OrangeButtonLink to="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=97B48AH3ZT92G&ssrt=1746749857705">Donate Now!</OrangeButtonLink>
          </div>
        </div>
        <div className="w-full p-4 rounded-2xl bg-white shadow flex flex-col 2xl:flex-row justify-start items-center gap-4 flex-4/7">
          {
            currentTab === "50" && (
              <>
                <img src="" alt="" className="size-full max-w-[450px] max-h-[300px] aspect-3/2 object-cover bg-black rounded-2xl"/>
                <p className="font-brandon">Pays for two people in need to get suited with helments at locks.</p>
              </>
          )}
          {
            currentTab === "200" && (
              <>
                <img src="" alt="" className="size-full max-w-[450px] max-h-[300px] aspect-3/2 object-cover bg-black rounded-2xl"/>
                <p className="font-brandon">Gives a refurbished bike to someone in need.</p>
              </>
          )}
          {
            currentTab === "500" && (
              <>
                <img src="" alt="" className="size-full max-w-[450px] max-h-[300px] aspect-3/2 object-cover bg-black rounded-2xl"/>
                <p className="font-brandon">Provides job training for seven young adults.</p>
              </>
            )}
          {
            currentTab === "800" && (
              <>
                <img src="" alt="" className="size-full max-w-[450px] max-h-[300px] aspect-3/2 object-cover bg-black rounded-2xl"/>
                <p className="font-brandon ">Provides new tools for our community and volunteers.</p>
              </>
            )}
        </div>
        <div className="w-full block md:hidden">
            <H3 className="mb-4">ready to donate?</H3>
            <p className="font-brandon mb-4">We greatly appreciate and welcome any donation amount!</p>
            <OrangeButtonLink to="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=97B48AH3ZT92G&ssrt=1746749857705">Donate Now!</OrangeButtonLink>
          </div>
      </div>
    </Section>
  );
}
