import { Route, Routes } from 'react-router-dom';
import './App.css';
import LayoutPage from './pages/LayoutPage';
import RegisterPage from './pages/RegisterPage';
import LogInForm from './components/LogInForm';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          {/* <Route path="formCompany" element={<FormCompany />} />
          <Route path="/formSeeker" element={<FormSeeker />} /> */}
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LogInForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
