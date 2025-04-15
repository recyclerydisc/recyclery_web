import { H2 } from '../generic/styled-tags';

export default function ClassDescription () {
    return (
        <section className="bg-background px-16 pt-16 pb-20">
            <section className="mb-12">
                <p className="text-xl  font-brandon leading-relaxed mb-6">
                    If you have never fixed a flat tire before, we recommend taking the Tune Up Class first.
                    <br /><br />
                    We can provide a bike that will be donated locally after the overhaul is complete, but we also 
                    encourage students to bring their own!
                </p>
                <br />
                <H2>mechanics 101</H2>
                <br />
                <p className="text-xl font-brandon leading-relaxed">
                    Learn the basics with our seasoned mechanics for a two-session bicycle maintenance course. 
                    Give your own geared bike a tune-up and become educated on proper terminology for componentry 
                    and tools, the basics of fixing flat tires, chain replacement, and brake & shifting adjustments. 
                    We keep classes small, so grab your limited spot while you can!
                </p>
            </section>

            <section className="mb-12">
                <br />
                <H2>overhaul class</H2>
                <br />
                <p className="text-xl font-brandon leading-relaxed">
                    Over six sessions, seasoned Recyclery mechanic instructor(s) will walk you through how to 
                    disassemble, reassemble, and adjust all major mechanical systems of your bicycle in addition 
                    to answering any questions you have along the way!
                </p>
            </section>     
        </section>

        
    );
}
