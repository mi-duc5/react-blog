import React from "react";
import TopBar from "./components/TopBar";
import Register from './pages/Register'
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <TopBar />  
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<Write />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
