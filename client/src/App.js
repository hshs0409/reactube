import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/views/Footer/Footer";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import NavBar from "./components/views/NavBar/NavBar";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import VideoUploadPage from "./components/views/VideoUploadPage/VideoUploadPage";
import Auth from "./hoc/auth";

function App() {
  // null = 아무나 , false = 로그인 한 사람은 못 들어가는 페이지 , true = 로그인 한 사람만
  return (
    <Router>
      <NavBar />
      <div style={{ paddingTop: "75px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route
            exact
            path="/video/upload"
            component={Auth(VideoUploadPage, true)}
          />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
