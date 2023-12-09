import {
  BrowserRouter as Router,
  Routes,
  Route, useNavigate
} from 'react-router-dom';

import { getItem } from '../core/storage/storage';

import Login from '../pages/login/login';
import Dashboard from '../pages/dashboard/dashboard';
import Users from '../pages/users/users';
import CreateUser from '../pages/createUser/createUser';

function App() {
  const token = getItem("token")

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/createuser" element={<CreateUser />} />

        </Routes>
      </Router>
      {/* {token ? null : <Login />} */}
    </>

  );
}

export default App;
