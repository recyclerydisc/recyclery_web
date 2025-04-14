//import NavBar from '../../components/navigation/nav-bar';
//import Footer from '../../components/footer/footer';
import headerPoster from '../../../assets/header-poster.jpg';
import { H1 } from '../../../components/generic/styled-tags';
import { BlueButtonLink, OrangeButtonLink } from '../../../components/generic/buttons';
import { BgImage } from '../../../components/generic/bg-image';


function Classes() {
  return (
    <div>
    <BgImage image={headerPoster} className="min-h-[32rem]">
    {/* <NavBar /> */}
      <main className="max-w-screen-xl mx-auto p-4">
        <section className="mb-8 text-center">
          <H1>Classes</H1>
          <p className="text-heading2 pt-8 max-w-[56rem] font-brandon">
            We teach bicycle maintenance through our introductory Tune Up Class and our advanced
            Overhaul Class.
          </p>
        </section>
        </main>
        </BgImage> 
        <section className="bg-background px-16 pt-10 pb-16">

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">mechanics 101</h2>
            <p>text</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">overhaul class</h2>
            <p>text</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">sign up</h2>
            <p>text and cards</p>
          </section>
        </section>
      
    </div>
 
    
  );
}

export default Classes;
