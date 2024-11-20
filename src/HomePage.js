import UserImage from "./userImage";
import Navbar from "./navbar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactMe from "./contactMe";

function HomePage() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <UserImage />
      </section>

      <section id="aboutMe">
        <AboutMe />
      </section>

      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
    </div>
  );
}

export default HomePage;
