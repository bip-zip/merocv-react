import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import { Toaster } from 'react-hot-toast';
import MarketPlace from './components/cv/MarketPlace';

function App() {
  return (
    <>
    <BrowserRouter>
    
   <Navbar/>
   <Toaster   position="top-center" />
    
   


    

    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/marketplace' element={<MarketPlace/>}></Route>
      {/* <Route path="/book-detail/:bookId" element={<BookDetail/>} ></Route> */}
    
    </Routes>
    
    </BrowserRouter>

  <Footer/>

    
    </>
  );
}

export default App;
