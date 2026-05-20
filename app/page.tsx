import NavBar from './components/main_window/navbar';
import Main from './components/main_window/main';
import Features from './components/main_window/features';
import BodySection from './components/main_window/body_section'
import Pay from './components/main_window/pay';
import Footer from './components/main_window/footer';

export default function Home () {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>

        <section>
          <Main />
        </section>

        <section>
          <Features />
        </section>  

        <section>
          <BodySection />
        </section>

        <section>
          <Pay />
        </section>

      </main>

      <footer>
        <Footer />
      </footer>      
    </>
  );
}