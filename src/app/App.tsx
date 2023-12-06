import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Login from '../pages/login/login';
import Dashboard from '../pages/dashboard/dashboard';
import Users from '../pages/users/users';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />

      </Routes>
    </Router>
  );
}

export default App;
