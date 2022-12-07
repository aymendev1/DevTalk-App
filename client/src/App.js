import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RSidebar from "./components/RightSidebar/rightSidebar";
import Layout from "./layouts/layout";
import Home from "./views/home/home";
import Messages from "./views/messages/messages";
import Profile from "./views/profile/profile";
import Settings from "./views/Settings/settings";
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import ForgotPass from "./views/Auth/ForgotPass";
function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-27%", right: "-2rem" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <>
                  <Home /> <RSidebar />
                </>
              }
            />
            <Route
              path="messages"
              element={
                <>
                  <Messages /> <RSidebar />
                </>
              }
            />
            <Route
              path="profile"
              element={
                <>
                  <Profile />
                  <RSidebar />
                </>
              }
            />
            <Route
              path="settings/*"
              element={
                <>
                  <Settings /> <RSidebar />
                </>
              }
            />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/passwordreset" element={<ForgotPass />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
