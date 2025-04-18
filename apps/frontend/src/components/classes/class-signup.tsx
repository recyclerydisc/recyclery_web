import { H2 } from '../generic/styled-tags';
import ClassCard from './class-card';


// #F0D9C2

export default function ClassSignup () {
    return (
        <section className="bg-tan-500 px-16 pt-10 pb-16">
            <section className="text-center mb-8">
            <H2>sign up</H2>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ClassCard
            title="Mechanics 101"
            level="beginner"
            sessions="Six Sessions"
            description="Learn all major mechanical systems of your bicycle."
            buttonText="Sign Up"
            buttonLink="https://therecyclery.square.site/product/bike-maintenance-101/1905?cp=true&sa=false&sbp=false&q=false&category_id=23"
            />
            <ClassCard
            title="Overhaul Class"
            level="advanced"
            sessions="Two Sessions"
            description="Learn basics bicycle maintenance."
            buttonText="Sign Up"
            buttonLink="https://therecyclery.square.site/product/overhaul-class/1027?cp=true&sa=false&sbp=false&q=false&category_id=23"
            />
      </div>
    </section>
 
    );
}
    
