import logo from './logo.svg';
import Home from './Home';
import Login from './login';
import Signup from './signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Dash2 from './Dash2';
import Workouts from './Workouts';
import ContactUs from './contact';
import Faq from './Faq';

import Terms from './Terms';
import ProfilePage from './profile';
import PrivacyPolicy from './PrivacyPolicy';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/dash2' element={<Dash2/>}></Route>
      <Route path='/workouts' element={<Workouts/>}></Route>
      <Route path='/contact' element={<ContactUs/>}></Route>
      <Route path='/Faq' element={<Faq/>}></Route>
      <Route path='/Terms' element={<Terms/>}></Route>
      <Route path='/profile' element={<ProfilePage/>}></Route>
      <Route path='/privacy' element={<PrivacyPolicy/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
