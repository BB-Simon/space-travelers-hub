import {
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import { Navigation } from './components';
import { Home, MyProfile } from './pages';

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
      </Route>
    </Routes>
  );
}

export default App;