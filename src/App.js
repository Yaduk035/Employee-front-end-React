
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form/Form';
import Home from './components/Home/Home';

function App() {
  return (
    <div >
<BrowserRouter basename='/NewEmployeeApp'>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/form' element={<Form/>} />
</Routes>
</BrowserRouter>


    </div>
  );
}

export default App;
