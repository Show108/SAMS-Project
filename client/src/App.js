import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css';
import {Home} from './pages/Home';
import About from './pages/About';
import Price from './pages/Price';
import Contact from './pages/Contact';
import Login from './pages/Login';
import RootLayouts from './layouts/RootLayouts';
import StudentSignin from './layouts/StudentSignin';
import NotFound from './pages/NotFound';

import Student from './pages/signin/Student';
import Lecturer from './pages/signin/Lecturer';
import Register_Institution from './pages/Register_Institution';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route>
        <Route path='/' element={<RootLayouts />}/>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='price' element={<Price />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='login' element={<Login />}/>
          <Route path='register-institution' element={<Register_Institution/>} />
          <Route path='signin' element={<StudentSignin />}/>
            <Route path='student' element={< Student/>}/>
            <Route path='lecturer' element={< Lecturer/>}/>



          <Route path='*' element={<NotFound />} />

      </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
