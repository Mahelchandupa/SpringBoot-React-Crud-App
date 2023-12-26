import './App.css';
import EditForm from './components/EditForm';
import Header from './components/Header';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import { Route, Routes } from 'react-router-dom';
import ViewStudent from './components/ViewStudent';

function App() {
 
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/add' element={<StudentForm />} />
        <Route path='/' element={<StudentList />} />
        <Route path='/edit/:id' element={<EditForm />} />
        <Route path='/view/:id' element={<ViewStudent />} />
      </Routes>
    </div>
  );
}

export default App;
