import Header from './components/Header';
import NavDots from './components/NavDots';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Applications from './sections/Applications';
import Products from './sections/Products';
import Description from './sections/Description';
import Technical from './sections/Technical';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import Details from './sections/Details';
import Faq from './sections/Faq';

export default function App() {
  return (
    <>
      <Header />
      <NavDots />
      <main>
        <Hero />
        <Applications />
        <Products />
        <Description />
        <Technical />
        <Certificates />
        <Contact />
        <Details />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
