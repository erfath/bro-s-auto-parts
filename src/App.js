import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import PrivateRoute from './Pages/Login/PrivateRoute';
import ManageItems from './Pages/Dashboard/ManageItems';
import ItemDetails from './Pages/Home/ItemDetails/ItemDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyOredrs from './Pages/Dashboard/MyOredrs';
import MyReview from './Pages/Dashboard/MyReview';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddItem from './Pages/Dashboard/AddItem';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import NotFound from './Pages/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import RecentProjects from './Pages/MyPortfolio/RecentProjects';


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
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path='orders' element={<MyOredrs></MyOredrs>}></Route>
            <Route path='review' element={<MyReview></MyReview>}></Route>
            <Route path='payment/:id' element={<Payment></Payment>}></Route>

            <Route path='addItem' element={<RequireAdmin><AddItem></AddItem></RequireAdmin>}></Route>
            <Route path='manageItems' element={<RequireAdmin><ManageItems></ManageItems></RequireAdmin>}></Route>
            <Route path='users' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
            <Route path='manageOrders' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
          </Route>
          <Route path='item/:id' element={
            <PrivateRoute>
              <ItemDetails></ItemDetails>
            </PrivateRoute>
          }></Route>
          <Route path='portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
          <Route path='blogs' element={<Blogs></Blogs>}></Route>  
          <Route path='projects' element={<RecentProjects></RecentProjects>}></Route>  
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='register' element={<Register></Register>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>       
      </Navbar>
      <ToastContainer />
    </div>
  );
}

export default App;
