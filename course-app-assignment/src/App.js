

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import EnquiryForm from './components/Enquiry/EnquiryForm';
import Home from './components/Home/Home';
import Enquiry from './components/Enquiry/Enquiry';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/enquriyForm" element={ <EnquiryForm/> }></Route>
          <Route path="/enquriy" element={ <Enquiry/> }></Route>
        </Routes>
      </Router>
     
      
     
              
    </div>
  );
}

export default App;
