import { useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { Home, Landing, Form, Detail } from './views';
import {Route, Routes} from 'react-router-dom';

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {pathname !== "/" && <NavBar.NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/create" element={<Form />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
