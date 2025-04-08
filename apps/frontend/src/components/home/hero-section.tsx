import { Link } from 'react-router-dom';
import headerPoster from '../../assets/header-poster.jpg';

export default function HeroSection() {
  return (
    <section
      className="flex flex-col justify-center items-center p-8 min-h-[32rem] text-white text-center"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${headerPoster})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <h1 className="text-7xl">the recyclery</h1>
      <p className="text-heading2 pt-8 max-w-[56rem] font-brandon">
        The Recyclery Collective is an educational bike shop that promotes sustainability by giving
        access to tools, skills, and opportunities for collaboration.
      </p>
      <div className="pt-6 space-x-4">
        <Link
          to="#"
          className="bg-orange-500 hover:bg-orange-700 px-3 py-2 rounded-2xl text-white text-body2 cursor-pointer transition-colors font-brandon"
        >
          Join Our Newsletter
        </Link>
        <Link
          to="https://therecyclery.square.site/"
          className="bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-2xl text-white text-body2 cursor-pointer transition-colors font-brandon"
        >
          Shop Our Bikes
        </Link>
      </div>
    </section>
  );
}
