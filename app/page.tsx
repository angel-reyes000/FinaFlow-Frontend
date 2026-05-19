import Main from './components/main_window/main';
import NavBar from './components/main_window/navbar';

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
        
      </main>
      
      
    </>
  );
}