import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home.jsx";
import SignIn from "./SignIn.jsx";
import Dashboard from "./Dashboard.jsx";
import SignUp from "./SignUp.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard"element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
