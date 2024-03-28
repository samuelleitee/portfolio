import { Route, Routes } from "react-router-dom";
import { AboutMe } from "./pages/AboutMe";
import { Hello } from "./pages/Hello";
import { Personal } from "./components/Informations/Personal";
import { Professional } from "./components/Informations/Professional";
import { Hobbies } from "./components/Informations/Hobbies";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Hello}>
          <Route path="personal" Component={Personal} />
          <Route path="professional" Component={Professional} />
          <Route path="hobbies" Component={Hobbies} />
        </Route>

        <Route path="/about-me" Component={AboutMe} />
        <Route path="/projects" Component={Projects} />
      </Routes>
    </div>
  );
}

export default App;
