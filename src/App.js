import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Shared/Footer/Footer';
import Checkout from './Pages/Checkout/Checkout';
import Login from './Pages/Login/Login';
import RequireAuth from './RequireAuth/RequireAuth';
import SignOut from './Pages/SignOut/SignOut';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>}>
        </Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signout' element={<SignOut></SignOut>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
