import "./App.css";
import AboutMe from "./components/organisms/aboutMe";
import HomeContent from "./components/organisms/HomeContent";
import Skills from "./components/organisms/skills/index";
import MyProjects from "./components/organisms/myProjects/index";
import ContactContent from "./components/organisms/contactContent/index";
import Footer from "./components/molecules/footer";

function App() {
  return (
    <div>
      <HomeContent />
      <AboutMe />
      <Skills />
      <MyProjects />
      <ContactContent />
      <Footer />
    </div>
  );
}

export default App;
