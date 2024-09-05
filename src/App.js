import './App.css';
import Welcome from './components/Entry/Welcome';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Sing_up from './components/Sing_up/Sing_up';
import Sing_In from './components/Sign_in/Sing_up';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Welcome></Welcome>}></Route>
    <Route path="/sign_up" element={<Sing_up/>}></Route>
    <Route path="/sign_in" element={<Sing_In/>}></Route>
    </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
