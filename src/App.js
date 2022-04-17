import logo from './logo.svg';
import './App.css';

import Footer from './Pages/Shared/Footer';
import Slider from './Pages/Home/Slider';
import NavigationBar from './Pages/Shared/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import Registration from './Pages/Login/Registration';

function App() {
  return (
    <div>
      <NavigationBar></NavigationBar>
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/home" element={<Home/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/registration" element={<Registration/>}></Route>
      
       <Route path="/about" element={<About/>}></Route>
       <Route path="/blogs" element={<Blogs/>}></Route>
       
     </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
