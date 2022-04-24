import './scss/Main.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Faq from './Pages/Faq';
import Contact from './Pages/Contact';
import Prices from './Pages/Prices';
import About from './Pages/About';
import BecomeHelper from './Pages/BecomeHelper';
import CustomerSignUp from './Pages/Customer_signup';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<HomePage/>}/>
    <Route exact path="/faq" element={<Faq/>}/>
    <Route exact path="/contact" element={<Contact />}/>
    <Route exact path="/prices" element={<Prices />}/>
    <Route exact path="/about" element={<About />}/>
    <Route exact path="/becomeHelper" element={<BecomeHelper />}/>
    <Route exact path="/customerSignUp" element={<CustomerSignUp />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
