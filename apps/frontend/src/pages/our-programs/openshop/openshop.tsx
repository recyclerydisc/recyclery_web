//import NavBar from '../../components/navigation/nav-bar';
//import Footer from '../../components/footer/footer';

function OpenShop() {
  return (
    <>
      {/* <NavBar /> */}

      <main className="max-w-screen-xl mx-auto p-4">
        <section className="mb-8 text-center">
          <h1 className="text-3xl">open shop</h1>
          <p className="text-lg">U text</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">what is open shop?</h2>
          <p>text</p>
          <p>text</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">hours</h2>
          <ul className="list-disc list-inside">
            <li>Tuesdays 5-7pm</li>
            <li>Thursdays 7-9pm</li>
            <li>Saturdays 1-4pm</li>
          </ul>
          <p>text with link as well</p>
        </section>
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default OpenShop;
