import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import SportsCardPage from './pages/sportscard/SportsCardPage';
import SlotsRedesignPage from './pages/slots-redesign/SlotsRedesignPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sports-card" element={<SportsCardPage />} />
        <Route path="/slots-redesign" element={<SlotsRedesignPage />} />
        <Route path="/" element={<Navigate to="/wallet" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
