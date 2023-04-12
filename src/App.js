import {
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import { Navigation } from './components';
import { Home, Missions, MyProfile } from './pages';

const Layout = () => (
  <main>
    <Navigation />
    <Outlet />
  </main>
);

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/missions" element={<Missions />} />
      </Route>
    </Routes>
  );
}

export default App;
