import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Login from '../pages/login/login';
import Dashboard from '../pages/dashboard/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
