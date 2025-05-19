import { Route, Routes } from 'react-router-dom';
import './App.css';
import FormCompany from './components/formCompany';
import LayoutPage from './pages/LayoutPage';
import FormSeeker from './components/formSeeker';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="formCompany" element={<FormCompany />} />
          <Route path="/formSeeker" element={<FormSeeker />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
