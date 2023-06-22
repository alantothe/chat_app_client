import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

import Dashboard from './components/Dashboard/Dashboard';
import LoginPage from './components/LoginPage/LoginPage';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';





function App() {
  return (
    <div>
<>
    <Router>
      <Routes>
        <Route  path="/login" element={<LoginPage />} />
        <Route  path="/register" element={<RegistrationPage />} />
        <Route  path="/dashboard" element={<Dashboard />} />
        <Route  path="/user" element={<UpdateProfile />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
    </>
    </div>
  );
}

export default App;
