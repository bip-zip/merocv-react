import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import { Toaster } from 'react-hot-toast';
import MarketPlace from './components/cv/MarketPlace';
import UserDetail from './components/userdetails/UserDetail';
import Design1 from './components/cv/Design1';

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
      <Route path='/userdetails/:tab' element={<UserDetail/>}></Route>
      <Route path='/design1' element={<Design1/>}></Route>
      {/* <Route path="/book-detail/:bookId" element={<BookDetail/>} ></Route> */}
    
    </Routes>
    
    </BrowserRouter>

  <Footer/>

    
    </>
  );
}

export default App;
