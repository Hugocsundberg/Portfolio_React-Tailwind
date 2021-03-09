import AboutMe from './Components/AboutMe';
import Hero from './Components/Hero';
import MoveShape from './Components/MoveShape';
import Project from './Components/Project';

function App() {
  return (
    <div className="App bg-gradient-to-b from-blue-100 to-purple-100">
      <MoveShape />
      <Hero />
      <h2>Projects.</h2>
      <Project />
      <Project />
      <Project />
      <h2>About Me</h2>
      <AboutMe />
    </div>
  );
}

export default App;
