import {
  BrowserRouter as Router,
  Routes,
  Route, useNavigate
} from 'react-router-dom';

import Login from '../pages/login/login';
import Dashboard from '../pages/dashboard/dashboard';
import Users from '../pages/users/users';
import { getItem } from '../core/storage/storage';

function App() {
  const token = getItem("token")

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
      {token ? null : <Login />}
    </>

  );
}

export default App;
