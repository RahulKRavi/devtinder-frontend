import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<AppLayout/>}>
            <Route path='/' element={<Feed/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Route>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
