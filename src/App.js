
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import {  Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./components/formdata";
import "./style/style.scss";
import AdminList from "./pages/list/AdminList";
import Login from "./pages/login/Login"
import LandingPage from "../src/pages/landingPage/LandingPage";
import { DarkModeContext } from "./context/DarkModeContext";
import { useContext } from "react";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import { hotelColumns, roomColumns, userColumns } from "./components/datatablesource";
import NewHotel from "./pages/new/NewHotel";
import NewRoom from "./pages/new/NewRoom";

function App() {
  

  const { darkMode }= useContext(DarkModeContext);
  
  return (
   <>
   <div className= { darkMode ? " app dark " : " app" }>
    <Routes>
    <Route path="/" >
    
    <Route path="login" element={<Login />} />
    <Route index element={
    <ProtectedRoute>
    <LandingPage />
    </ProtectedRoute>
    } />
    <Route path="users" >
      <Route index element = {
      <ProtectedRoute>
      <AdminList columns = {userColumns} />
      </ProtectedRoute>
      }/>
      <Route path=":userId" element={
      <ProtectedRoute>
      <Single />
      </ProtectedRoute>
    } />
      <Route path="new" element={
      <ProtectedRoute>
      <New inputs= {userInputs} title = "Add New User"/>
      </ProtectedRoute>
    } />
    </Route>
    <Route path="hotels">
    <Route index element = {
      <ProtectedRoute>
      <AdminList columns={hotelColumns} />
      </ProtectedRoute>
    }/>
      <Route path=":productId" element={
         <ProtectedRoute>
         <Single />
         </ProtectedRoute>
      } />
      <Route path="new" element={
      <ProtectedRoute>
      <NewHotel  />
      </ProtectedRoute>
      } />
    </Route>
    <Route path="rooms">
    <Route index element = {
      <ProtectedRoute>
      <AdminList columns={roomColumns} />
      </ProtectedRoute>
    }/>
      <Route path=":productId" element={
         <ProtectedRoute>
         <Single />
         </ProtectedRoute>
      } />
      <Route path="new" element={
      <ProtectedRoute>
      <NewRoom />
      </ProtectedRoute>
      } />
    </Route>
    </Route>
    </Routes>
    </div>
   </>
  );
}

export default App;