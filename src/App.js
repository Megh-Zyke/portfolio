import './App.css';
import UserImage from './userImage';
import Navbar from './navbar';
import AboutMe from './aboutMe';
import Projects from './projects';
import ContactMe from './contactMe';

function App() {

  return (
 
    <div>
        <Navbar />
        <section id = "home">
          <UserImage />
        </section>
       
       <section id = "aboutMe">
        <AboutMe />
        </section>

      <section id = "contact">
      <Projects />
      </section>
   

        

        <section id = "contact">
        <ContactMe />
        </section>
    </div>


     );
}

export default App;
