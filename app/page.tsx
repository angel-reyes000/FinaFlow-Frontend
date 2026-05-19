import Main from './components/main_window/main';
import NavBar from './components/main_window/navbar';
import Features from './components/main_window/features';

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
        
      </main>
      
      
    </>
  );
}