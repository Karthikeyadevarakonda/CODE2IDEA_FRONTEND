import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/student/Dashboard";
import EventPage from "./pages/student/EventPage";
import PastIdeas from "./pages/student/PastIdeaRepo/PastIdeas";
import PastIdeaDetails from "./pages/student/PastIdeaRepo/PastIdeaDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="student/dashboard" element={<Dashboard />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/past-ideas" element={<PastIdeas />} />
        <Route path="/past-ideas/:id" element={<PastIdeaDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
