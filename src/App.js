import {BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import Header from "./components/Header";
import "./styles/App.scss";
import "./styles/header.scss";
import Home from "./components/Home";
import "./styles/home.scss";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import "./styles/footer.scss";
import "./styles/contact.scss";
import Services from "./components/Services";
import "./styles/mediaquert.scss";
function App() {
  return (
    <>
<Router>
  <Header/>
  <Routes>
   <Route path="/" element={<Home />}/>
   <Route path="/contact" element={<Contact />}/>
   <Route path="/services" element={<Services />}/>
  </Routes>
  <Footer/>
</Router>

    </>
  );
}

export default App;
