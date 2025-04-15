import headerPoster from '../../assets/header-poster.jpg';
import { H1 } from '../generic/styled-tags';
import { BgImage } from '../generic/bg-image';

export default function ClassHero() {
    return (
        <BgImage image={headerPoster} className="min-h-[32rem]">
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
    );
}
