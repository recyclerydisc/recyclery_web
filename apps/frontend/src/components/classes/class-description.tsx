import { H1, H2, H3, A} from '../generic/styled-tags';

export default function ClassDescription () {
    return (
        <section className="bg-background px-16 pt-10 pb-16">
            <section className="mb-8">
                <H2>mechanics 101</H2>
                <p className="text-body2 font-brandon">If you have never fixed a flat tire before, we recommend taking the Tune Up Class first.<br /> <br />
                We can provide a bike that will be donated locally after the overhaul is complete, but we also encourage students to bring their own!</p>
            </section>

            <section className="mb-8">
                <H2>overhaul class</H2>
                <p className="text-body2 font-brandon">text</p>
            </section>     
        </section>

        
    );
}
