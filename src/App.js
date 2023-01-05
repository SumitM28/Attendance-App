import { BrowserRouter,Routes,Route } from "react-router-dom";
import './app.css'
import Home from "./pages/home/Home";
import Student from "./pages/student/Student";
import Teacher from "./pages/teacher/Teacher";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route element={<Home/>} path={'/'}/>
    <Route element={<Student/>} path={'/student'}/>
    <Route element={<Teacher/>} path={'/teacher'}/>
    </Routes> 
    </BrowserRouter>
  );
}

export default App;
