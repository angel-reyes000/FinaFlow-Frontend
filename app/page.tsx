"use client";

import NavBar from './components/main_window/navbar';
import Main from './components/main_window/main';
import Features from './components/main_window/features';
import BodySection from './components/main_window/body_section'
import Pay from './components/main_window/pay';
import Footer from './components/main_window/footer';
import { useEffect, useRef } from 'react';

export default function Home () {
  const refSectionHome = useRef('section_home');
  const refSectionFeatures = useRef('section_features');
  const refSectionBody = useRef('section_body');
  const refSectionPay = useRef('section_pay');

  return (
    <>
      <header>
        <NavBar refs={{ refSectionPay, refSectionBody, refSectionFeatures, refSectionHome }}/>
      </header>

      <main>

        <section>
          <Main ref={refSectionHome}/>
        </section>

        <section>
          <Features ref={refSectionFeatures} />
        </section>  

        <section>
          <BodySection ref={refSectionBody} />
        </section>

        <section>
          <Pay ref={refSectionPay} />
        </section>

      </main>

      <footer>
        <Footer />
      </footer>      
    </>
  );
}

