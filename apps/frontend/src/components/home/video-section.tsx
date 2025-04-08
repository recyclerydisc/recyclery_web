export default function VideoSection() {
  return (
    <section className="bg-background px-6 pt-10 pb-12 flex flex-col items-center">
      <h2 className="text-4xl text-orange-500">introductory video</h2>
      <iframe
        className="w-full md:w-[600px] lg:w-[900px] h-[300px] md:h-[337px] lg:h-[506px] mt-6"
        src="https://www.youtube.com/embed/p_mOukqz0WM"
        title="Recyclery"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </section>
  );
}
