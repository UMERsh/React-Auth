import './App.scss';
import {Route} from 'react-router-dom'
import Routes from './pages/Routes'
import { ToastContainer } from 'react-toastify';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import AuthContextProvider from './Context/AuthContext';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
function App() {
  
  
  return (
   <>
   <AuthContextProvider>
    <Routes />
    <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
    </AuthContextProvider>
   </>
  );
}

export default App;
