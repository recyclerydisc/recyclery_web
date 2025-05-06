import { H2, Section } from '../generic/styled-tags';

function CalendarSection() {
  return (
    <Section tan>
      <H2 className="!mb-4">our event calendar</H2>
      <p className="text-body2 font-brandon">
        The calendar below shows all events for the Recyclery. Any upcoming events will also be
        updated here!
      </p>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=therecyclery%40gmail.com&ctz=America%2FChicago"
        className="border-none w-full h-[700px] mt-6 hidden md:block"
        frameBorder="0"
        scrolling="no"
      ></iframe>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=therecyclery%40gmail.com&mode=AGENDA&ctz=America%2FChicago"
        className="border-none w-full h-[700px] mt-6 block md:hidden"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </Section>
  );
}

export default CalendarSection;
