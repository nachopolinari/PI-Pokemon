import NavBar from "./Components/NavBar/NavBar";
import { Landing, Form, Home, Detail } from "./Views";
import { Routes, Route, useLocation } from 'react-router-dom';


function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      
      {pathname !== '/' && <NavBar />}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
