import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import PrivateRoute from './Pages/Login/PrivateRoute';
import ManageItems from './Pages/ManageItems/ManageItems';
import ItemDetails from './Pages/Home/ItemDetails/ItemDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyOredrs from './Pages/Dashboard/MyOredrs';
import MyReview from './Pages/Dashboard/MyReview';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Pages/Login/RequireAdmin';

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='home' element={<Home></Home>}></Route>
          <Route path='dashboard' element={
            <PrivateRoute>
              <Dashboard></Dashboard>
            </PrivateRoute>
          }>
            <Route index element={<MyOredrs></MyOredrs>}></Route>
            <Route path='review' element={<MyReview></MyReview>}></Route>
            <Route path='users' element={
              <RequireAdmin>
                <AllUsers></AllUsers>
              </RequireAdmin>
            }></Route>
          </Route>
          <Route path='item/:id' element={
            <PrivateRoute>
              <ItemDetails></ItemDetails>
            </PrivateRoute>
          }></Route>
          <Route path='profile' element={<Home></Home>}></Route>
          <Route path='manageItems' element={<ManageItems></ManageItems>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='register' element={<Register></Register>}></Route>
        </Routes>
      </Navbar>
      <ToastContainer />
    </div>
  );
}

export default App;
