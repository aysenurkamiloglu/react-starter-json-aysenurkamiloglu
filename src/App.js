import Students from "./components/Students/Students";
//import Lessons from "./components/Lessons/Lessons";

import "./App.css";
import Assistants from "./components/Assistants/Assistants";

const App = () => {

  return (
    <section className="app">
      <Students></Students>
      <Assistants></Assistants>
    </section>
  );
}

export default App;