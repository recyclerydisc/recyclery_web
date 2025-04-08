function CalendarSection() {
  return (
    <section className="bg-tan-500 px-16 pt-10 pb-12">
      <h2 className="text-4xl text-orange-500">our event calendar</h2>
      <p className="text-body2 pt-4 font-brandon">
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
    </section>
  );
}

export default CalendarSection;
