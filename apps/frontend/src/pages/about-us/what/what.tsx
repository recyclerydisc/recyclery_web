//import NavBar from '../../components/navigation/nav-bar';
//import Footer from '../../components/footer/footer';

function WhatWeDo() {
  return (
    <>
      {/* Header/Nav */}

      {/* <NavBar />  add in when Navbar implemented*/}

      {/* Main Content */}
      <main className="max-w-screen-xl mx-auto p-4">
        <section className="mb-8 text-center">
          <h1 className="text-3xl">What We Do</h1>
          <p className="text-lg">Text</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl">Our Mission</h2>
          <p>Text</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">our vision</h2>
          <p>Text</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl">our core values</h2>
          <ul className="list-disc list-inside">
            <li>collaboration</li>
            <li>social Justice</li>
            <li>ecological sustainability</li>
            <li>celebrating everything we do</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl">testimonials</h2>
          <p>Text</p>
        </section>
      </main>

      {/* Footer */}
      {/* <Footer />  add in when Navbar implemented*/}
    </>
  );
}

export default WhatWeDo;
