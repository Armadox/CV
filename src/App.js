import './App.css';
import './components/style/style.css';
import TopBar from './components/top.js';
import 'bootstrap/dist/css/bootstrap.css';
import AboutMe from './components/about';
import MySkills from './components/skills';
import MyExp from './components/experience';
import MyProject from './components/projects';
import BottomBar from './components/bottom';
import ContactMe from './components/contact';
import ContactButton from './components/contactMe';



function App() {

  return (
      <main>
        <TopBar />
          <div className='page'>
            <ContactButton />
            <AboutMe />
            <MySkills />
            <MyExp />
            <MyProject />
            <ContactMe />
          </div>
        <BottomBar />
      </main>
  );
}

export default App;
