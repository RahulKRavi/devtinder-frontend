import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

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
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
