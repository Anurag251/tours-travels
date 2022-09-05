import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/sass/styles.sass";
import HeaderComponent from "./components/header.component";
import HomePage from "./pages/home-page.component";

const App = () => {
  return (
    <div className="app">
      <HeaderComponent />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
