import { Landing, Form, Home, Detail } from "./Views";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>Todo ok</h1>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
