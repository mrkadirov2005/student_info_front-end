import './App.css';
import Welcome from './components/Entry/Welcome';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Sing_up from './components/Sing_up/Sing_up';
import Sing_In from './components/Sign_in/Sing_in';
import StudentRegistrationForm from './components/add_student/add_student';
import TeacherForm from './components/add_teacher/add_teacher';
import Add_group from './components/add_group/add_group';
import AdminPanelLayout from './pages/AdminPage/adminPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Welcome></Welcome>}></Route>
    <Route path="/sign_up" element={<Sing_up/>}></Route>
    <Route path="/sign_in" element={<Sing_In/>}></Route>
    <Route path="/add_student" element={<StudentRegistrationForm/>}></Route>
    <Route path="/add_teacher" element={<TeacherForm/>}></Route>
    <Route path="/add_group" element={<Add_group/>}></Route>
    <Route path="/admin" element={<AdminPanelLayout/>}></Route>

    </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
