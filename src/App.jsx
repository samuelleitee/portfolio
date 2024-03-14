import { Route, Routes } from "react-router-dom";
import { AboutMe } from "./pages/AboutMe";
import { Personal } from "./components/Informations/Personal";
import { Professional } from "./components/Informations/Professional";
import { Hobbies } from "./components/Informations/Hobbies";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={AboutMe}>
          <Route path="personal" Component={Personal} />
          <Route path="professional" Component={Professional} />
          <Route path="hobbies" Component={Hobbies} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
