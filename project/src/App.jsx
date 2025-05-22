import { Route, Routes } from 'react-router-dom';
import './App.css';
import FormCompany from './components/formCompany';
import LayoutPage from './pages/LayoutPage';
import FormSeeker from './components/formSeeker';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          {/* <Route path="formCompany" element={<FormCompany />} />
          <Route path="/formSeeker" element={<FormSeeker />} /> */}
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
