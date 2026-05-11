/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Gallery from './components/Gallery';
import RequestForm from './components/RequestForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Services />
      <Gallery />
      <RequestForm />
      <Footer />
    </div>
  );
}

