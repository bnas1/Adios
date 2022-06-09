import "./App.css";
import MainComponent from "./component/MainComponent";
import { BrowserRouter } from "react-router-dom";
import Nav from "./component/header/nav";
import Footer from "./component/footer/footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <MainComponent />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
