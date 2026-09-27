import Hero from '../components/sections/Hero';
import TrustBar from '../components/sections/TrustBar';
import Intro from '../components/sections/Intro';
import Services from '../components/sections/Services';
import SpecializedServices from '../components/sections/SpecializedServices';
import Packages from '../components/sections/Packages';
import Process from '../components/sections/Process';
import Comparison from '../components/sections/Comparison';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Intro />
      <Services />
      <SpecializedServices />
      <Packages />
      <Process />
      <Comparison />
      <FAQ />
      <Contact />
    </>
  );
}