import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import VipProgramModal from './components/vip-program/VipProgramModal';
import Wallet from './components/Wallet';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/vip-program" element={<VipProgramModal />} />
        <Route path="/" element={<Navigate to="/wallet" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
